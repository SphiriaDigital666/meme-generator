import React, { useState, useRef, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  IMAGE: "image",
};

function DraggableImage({ image, index, moveImage }) {
  const [, drag] = useDrag({
    type: ItemTypes.IMAGE,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.IMAGE,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: image ? "transparent" : "#f0f0f0",
      }}
    >
      {image ? (
        <img
          src={image}
          alt="Uploaded"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        "Upload Image"
      )}
    </div>
  );
}

function ImageCollage() {
  const [images, setImages] = useState([null, null, null, null]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const canvasRef = useRef(null);

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const newImages = [...images];
      newImages[index] = e.target.result;
      setImages(newImages);

      // Trigger preview generation if all images are uploaded
      if (newImages.every((img) => img !== null)) {
        generateCollageImage(newImages);
      }
    };
    reader.readAsDataURL(file);
  };

  const moveImage = (fromIndex, toIndex) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    setImages(newImages);
  };

  const generateCollageImage = (imagesArray) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas size (e.g., 410x410 to accommodate 5px padding)
    const canvasSize = 410;
    const padding = 5;
    const cellSize = (canvasSize - padding * 3) / 2; // Calculate cell size considering padding

    canvas.width = canvasSize;
    canvas.height = canvasSize;

    // Fill background with white (padding color)
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw each image onto the canvas with padding
    imagesArray.forEach((image, index) => {
      if (image) {
        const img = new Image();
        img.src = image;

        img.onload = () => {
          const x = (index % 2) * (cellSize + padding) + padding; // Calculate x position with padding
          const y = Math.floor(index / 2) * (cellSize + padding) + padding; // Calculate y position with padding
          context.drawImage(img, x, y, cellSize, cellSize);

          // After all images are drawn, create a data URL for the preview
          if (index === imagesArray.length - 1) {
            const finalImage = canvas.toDataURL("image/png");
            setPreviewUrl(finalImage); // Set the preview URL
          }
        };
      }
    });
  };

  const handleDownload = () => {
    if (previewUrl) {
      const link = document.createElement("a");
      link.href = previewUrl;
      link.download = "collage.png";
      link.click();
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "10px",
            width: "400px",
            height: "400px",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                border: "1px solid black",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <DraggableImage
                image={image}
                index={index}
                moveImage={moveImage}
              />
              <input
                type="file"
                accept="image/*"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                }}
                onChange={(e) => handleImageUpload(e, index)}
              />
            </div>
          ))}
        </div>

        {/* Preview Image */}
        {previewUrl && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={previewUrl}
              alt="Collage Preview"
              style={{ width: "400px", height: "400px", objectFit: "cover" }}
            />
            <button onClick={handleDownload}>Download Image</button>
          </div>
        )}

        {/* Hidden canvas used for generating the final image */}
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </DndProvider>
  );
}

export default ImageCollage;
