import React, { useRef } from "react";

import image1 from "../../assets/image01.png";
import image2 from "../../assets/image02.png";
import image3 from "../../assets/image03.png";
import image4 from "../../assets/image04.png";
import image5 from "../../assets/image05.png";
import image6 from "../../assets/image06.png";
import image7 from "../../assets/image07.png";
import image8 from "../../assets/image08.png";
import image9 from "../../assets/image09.png";
import image10 from "../../assets/image01.png";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const ImageSelector = ({ onImageSelect }) => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleSelect = (image) => {
    onImageSelect(image);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl cursor-pointer"
      >
        <FaAngleLeft />
      </button>
      <div
        ref={carouselRef}
        className="flex overflow-hidden w-full no-scrollbar"
      >
        <div className="flex">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Meme ${index}`}
              className="w-[calc(12.5%-10px)] h-auto flex-shrink-0 cursor-pointer border-4 border-gray-300 rounded-md mr-2.5"
              onClick={() => handleSelect(image)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl cursor-pointer"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default ImageSelector;
