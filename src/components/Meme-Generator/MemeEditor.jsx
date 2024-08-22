import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";
import TextEditor from "./TextEditor";
import ColorPicker from "./ColorPicker";
import FontSelector from "./FontSelector";
import FontSizeSelector from "./FontSizeSelector";
import { MdDownloadForOffline, MdImage } from "react-icons/md";
import ImageSelector from "./ImageSelector";
import TextIcon from "../../assets/textEditor/Lowercase.png";

import image1 from "../../assets/image01.png";
import image2 from "../../assets/image02.png";
import image3 from "../../assets/image03.png";
import image4 from "../../assets/image04.png";
import image5 from "../../assets/image05.png";
import image6 from "../../assets/image06.png";
import image7 from "../../assets/image07.png";
import image8 from "../../assets/5.png";

import media from "../../assets/sidebar/Import.png";
import crop from "../../assets/sidebar/Crop.png";
import text from "../../assets/sidebar/Lowercase (1).png";
import image from "../../assets/sidebar/Image File.png";
import element from "../../assets/sidebar/Apps.png";
import sounds from "../../assets/sidebar/Audio.png";
import layers from "../../assets/sidebar/Layers.png";
import template from "../../assets/sidebar/Prototype.png";
import more from "../../assets/sidebar/More.png";
import help from "../../assets/sidebar/Help.png";

import "./memeEditor.css";
const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const MemeEditor = () => {
  const [texts, setTexts] = useState([]);
  const [selectedTextId, setSelectedTextId] = useState(null);
  const [currentColor, setCurrentColor] = useState("#ffffff");
  const [selectedImage, setSelectedImage] = useState(null);
  const memeRef = useRef(null);

  useEffect(() => {
    if (texts.length === 0) {
      handleAddText();
    }
  }, [texts]);

  const handleTextChange = (e) => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, text: e.target.value } : text
    );
    setTexts(newTexts);
  };

  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
    const newTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, color: color.hex } : text
    );
    setTexts(newTexts);
  };

  const handleFontChange = (e) => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, fontStyle: e.target.value } : text
    );
    setTexts(newTexts);
  };

  const handleFontSizeChange = (e) => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? { ...text, fontSize: parseInt(e.target.value, 10) }
        : text
    );
    setTexts(newTexts);
  };

  const handleToggleBold = () => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? {
            ...text,
            fontWeight: text.fontWeight === "bold" ? "normal" : "bold",
          }
        : text
    );
    setTexts(newTexts);
  };

  const handleToggleItalic = () => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? {
            ...text,
            fontStyle: text.fontStyle === "italic" ? "normal" : "italic",
          }
        : text
    );
    setTexts(newTexts);
  };

  const handleToggleUnderline = () => {
    const newTexts = texts.map((text) =>
      text.id === selectedTextId
        ? {
            ...text,
            textDecoration:
              text.textDecoration === "underline" ? "none" : "underline",
          }
        : text
    );
    setTexts(newTexts);
  };

  const handleAddText = () => {
    if (texts.length < 4) {
      const newId = texts.length + 1;
      const newY =
        texts.length === 0
          ? 100
          : texts[texts.length - 1].y + texts[texts.length - 1].fontSize + 10;
      setTexts([
        ...texts,
        {
          id: newId,
          text: "",
          x: 100,
          y: newY,
          color: currentColor,
          fontStyle: "Roboto",
          fontSize: 24,
          fontWeight: "normal",
          textDecoration: "none",
        },
      ]);
      setSelectedTextId(newId);
    }
  };

  const handleSelectText = (id) => {
    setSelectedTextId(id);
  };

  const handleDeleteText = () => {
    if (selectedTextId !== null) {
      setTexts(texts.filter((text) => text.id !== selectedTextId));
      setSelectedTextId(null);
    }
  };

  const handleDownloadMeme = () => {
    const selectedTextElement = document.getElementById(
      `text-${selectedTextId}`
    );
    if (selectedTextElement) {
      selectedTextElement.style.border = "none";
    }

    html2canvas(memeRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "meme.png";
      link.click();

      if (selectedTextElement) {
        selectedTextElement.style.border = "2px dotted #000";
      }
    });
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    // No need to hide the image selector
  };

  return (
    <div className="container123 bg-[#191919] border-t border-[#535353]">
      {/* <div className="bg-[#191919] flex flex-col mx-auto pt-4 left-section">
        <div className="text-[#fff] flex items-center gap-4 mb-8 px-2 cursor-pointer">
          <img src={media} alt="Description" className="opacity-60" />
          <p>Media</p>
        </div>

        <div className="text-[#fff] flex items-center gap-4 mb-8 px-2 cursor-pointer">
          <img src={crop} alt="Description" className="opacity-60" />
          <p>Crop</p>
        </div>

        <div className="text-[#fff] flex items-center gap-4 mb-8 px-2 cursor-pointer">
          <img src={text} alt="Description" className="opacity-60" />
          <p>Text</p>
        </div>

        <div className="text-[#fff] flex items-center gap-4 mb-8 px-2 cursor-pointer">
          <img src={image} alt="Description" className="opacity-60" />
          <p>Image</p>
        </div>

        <div className="text-[#fff] flex items-center gap-4 mb-8 px-2 cursor-pointer">
          <img src={element} alt="Description" className="opacity-60" />
          <p>Element</p>
        </div>

        <div className="text-[#fff] flex items-center gap-4 mb-8 px-2 cursor-pointer">
          <img src={sounds} alt="Description" className="opacity-60" />
          <p>Sounds</p>
        </div>

        <div className="text-[#fff] flex items-center gap-4 mb-8 px-2 cursor-pointer">
          <img src={layers} alt="Description" className="opacity-60" />
          <p>Layers</p>
        </div>

        <div className="text-[#fff] flex items-center gap-4 mb-8 px-2 cursor-pointer">
          <img src={template} alt="Description" className="opacity-60" />
          <p>Template</p>
        </div>

        <div className="text-[#fff] flex items-center gap-4 mb-8 px-2 cursor-pointer">
          <img src={more} alt="Description" className="opacity-60" />
          <p>More</p>
        </div>
      </div> */}

      <div className="bg-[#191919] right-section">
        {selectedImage && selectedTextId ? (
          <div className="flex items-end w-fit gap-4 m-3 mb-[18px] lg:mt-4 lg:mb-6 lg:mx-auto xl:gap-6 lg:w-[120px] xl:w-[130px] 2xl:w-[150px]">
            <img
              src={TextIcon}
              alt="My Image"
              className="w-5 md:w-6 lg:w-7 xl:w-8 2xl:w-9 translate-y-[1px] xl:translate-y-[2px]"
            />
            <p className="text-white text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-none">
              Text Editor
            </p>
          </div>
        ) : (
          <p className="p-4 text-center">
            Pick a Meme Template to Start Editing Your Meme.
          </p>
        )}

        {/* <div className="flex items-end w-fit gap-4 m-3 mb-[18px] lg:mt-4 lg:mb-6 lg:mx-auto xl:gap-6 lg:w-[120px] xl:w-[130px] 2xl:w-[150px]">
          <img
            src={TextIcon}
            alt="My Image"
            className="w-5 md:w-6 lg:w-7 xl:w-8 2xl:w-9 translate-y-[1px] xl:translate-y-[2px]"
          />
          <p className="text-white text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-none">
            Text Editor
          </p>
        </div> */}

        <div className="flex">
          {selectedImage && selectedTextId !== null && (
            <div className="w-full">
              <div className=" border-b border-[#535353] py-3 px-4">
                <TextEditor
                  text={texts.find((text) => text.id === selectedTextId)}
                  onTextChange={handleTextChange}
                  onAddText={handleAddText}
                  onDeleteText={handleDeleteText}
                  onToggleBold={handleToggleBold}
                  onToggleItalic={handleToggleItalic}
                  onToggleUnderline={handleToggleUnderline}
                  isAddDisabled={texts.length >= 4}
                />
              </div>

              <div className="border-b border-[#535353] py-3 px-4">
                <ColorPicker
                  currentColor={currentColor}
                  onColorChange={handleColorChange}
                />
              </div>

              <div className="border-b border-[#535353] py-3 px-4">
                <FontSelector
                  currentFont={
                    texts.find((text) => text.id === selectedTextId)?.fontStyle
                  }
                  onFontChange={handleFontChange}
                />
              </div>

              <div className="border-b border-[#535353] py-3 px-4">
                <FontSizeSelector
                  currentSize={
                    texts.find((text) => text.id === selectedTextId)?.fontSize
                  }
                  onSizeChange={handleFontSizeChange}
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="hidden sm:block">
                  <button
                    className="bg-[#5f5f5f] text-white leading-none flex gap-1 justify-center items-center py-3 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] rounded-md mt-4 mx-3 lg:mx-0 w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px] 2xl:w-[150px] "
                    onClick={() => setSelectedImage(null)} // Option to clear the image
                  >
                    <MdImage className="-translate-y-[1px]" />
                    Change Image
                  </button>
                </div>

                <div className="hidden sm:block">
                  <button
                    className="bg-[#9bc921] text-white leading-none flex gap-1 justify-center items-center py-3 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] rounded-md mt-4 mx-3 lg:mx-0 w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px] 2xl:w-[150px]"
                    onClick={handleDownloadMeme}
                    disabled={!selectedImage}
                  >
                    <MdDownloadForOffline />
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#191919] flex justify-center border-x border-[#535353] middle-section">
        <div>
          {selectedImage && selectedTextId ? (
            <p className="text-[#fff] sm:pl-[40px] mb-4 text-[16px] md:text-[19px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px] mt-6 text-center sm:text-left">
              Meme Template
            </p>
          ) : (
            <p className="text-[#fff] sm:pl-[40px] mb-4 text-[16px] md:text-[19px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px] mt-6 text-center sm:text-left">
              Meme Templates
            </p>
          )}

          <div
            style={{
              position: "relative",
              width: "",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <div
              ref={memeRef}
              style={{ position: "relative", display: "inline-block" }}
            >
              {selectedImage ? (
                <>
                  <div className="flex items-center justify-center">
                    <img
                      src={selectedImage}
                      alt="Meme"
                      style={{ width: "50%", height: "auto" }}
                    />
                  </div>

                  {texts.map((text) => (
                    <Draggable
                      key={text.id}
                      defaultPosition={{ x: text.x, y: text.y }}
                      onStop={(e, data) => {
                        const newTexts = texts.map((t) =>
                          t.id === text.id ? { ...t, x: data.x, y: data.y } : t
                        );
                        setTexts(newTexts);
                      }}
                    >
                      <div
                        id={`text-${text.id}`}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          color: text.color,
                          fontSize: `${text.fontSize}px`,
                          fontWeight: text.fontWeight,
                          textDecoration: text.textDecoration,
                          fontStyle: text.fontStyle,
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                          fontFamily: text.fontStyle,
                          cursor: "move",
                          border:
                            text.id === selectedTextId
                              ? "2px dotted #fff"
                              : "none",
                        }}
                        onClick={() => handleSelectText(text.id)}
                      >
                        {text.text}
                      </div>
                    </Draggable>
                  ))}
                </>
              ) : (
                <div className="w-full">
                  <ImageSelector onImageSelect={handleImageSelect} />
                </div>
              )}
            </div>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {selectedImage && selectedTextId !== null && (
              <div className="w-full">
                {" "}
                <div className="flex flex-col items-center justify-center mb-6 mt-4">
                  <div className="block sm:hidden">
                    <button
                      className="bg-[#5f5f5f] text-white leading-none flex gap-1 justify-center items-center py-2 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] rounded-md mt-4 mx-3 lg:mx-0 w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px] 2xl:w-[150px]"
                      onClick={() => setSelectedImage(null)} // Option to clear the image
                    >
                      <MdImage className="-translate-y-[1px]" />
                      Change Image
                    </button>
                  </div>

                  <div className="block sm:hidden">
                    <button
                      className="bg-[#9bc921] text-white leading-none flex gap-1 justify-center items-center py-2 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] rounded-md mt-4 mx-3 lg:mx-0 w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px] 2xl:w-[150px]"
                      onClick={handleDownloadMeme}
                      disabled={!selectedImage}
                    >
                      <MdDownloadForOffline />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          </div>

          {/* resolution section starts here */}
          {/* <div class="px-4 bg-[#424242] h-[500px] mt-8 flex items-center justify-center mx-6">
            <div className="flex flex-col items-center">
              <h1 class="text-center text-white sm:text-2xl lg:text-3xl">
                Select Your Meme
              </h1>
              <hr className="my-3 border-t-[#aaaaaa] w-full sm:w-[calc(90%+15vw)]" />
              <p class="text-center text-white mb-6 sm:text-sm lg:text-base">
                Start with a blank canvas
              </p>

              <div class="flex justify-center space-x-4">
                <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-3 rounded sm:text-sm lg:text-base">
                  21:9
                </button>
                <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-3 rounded sm:text-sm lg:text-base">
                  16:9
                </button>
                <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-3 rounded sm:text-sm lg:text-base">
                  1:1
                </button>
                <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-3 rounded sm:text-sm lg:text-base">
                  4:5
                </button>
                <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-3 rounded sm:text-sm lg:text-base">
                  9:16
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MemeEditor;
