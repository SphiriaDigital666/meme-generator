import React from "react";
import mainImage from "../../assets/main-page/main-image.jpg";
import eclipse01 from "../../assets/main-page/Ellipse 1.png";
import eclipse02 from "../../assets/main-page/Ellipse 2.png";
import eclipse03 from "../../assets/main-page/Ellipse 3.png";
import eclipse04 from "../../assets/main-page/Ellipse 4.png";

function MainPage() {
  return (
    <div className="bg-[#000000] h-screen flex items-center justify-center">
      <div className="bg-[#202020] container relative pb-20">
        <p className="text-[#fff] text-[64px] inter-font font-extrabold mb-2">
          Create more MEME in less time
        </p>
        <p className="text-[#fff] text-[20px] inter-font font-normal mb-12">
          Create and share memes instantly with MemeMaster! Choose from
          templates or upload your own images. <br></br> Perfect for beginners
          and pros. Start creating and join the meme revolution!
        </p>

        {/* eclipse vectors */}

        <div className="absolute top-[40px] right-0">
          <img src={eclipse01} alt="main image" className="w-[140px]" />
        </div>

        <div className="absolute bottom-[330px] right-[282px]">
          <img src={eclipse03} alt="main image" className="w-[60px]" />
        </div>

        <div className="absolute top-[60px] left-0">
          <img src={eclipse03} alt="main image" className="w-[60px]" />
        </div>

        <div className="absolute bottom-0 left-[233px]">
          <img src={eclipse04} alt="main image" className="w-[200px]" />
        </div>

        <div className="flex items-center justify-center">
          <img src={mainImage} alt="main image" className="w-[850px]" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
