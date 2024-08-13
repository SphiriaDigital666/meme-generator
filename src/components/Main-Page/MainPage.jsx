import React from "react";
import mainImage from "../../assets/main-page/main-image.jpg";

function MainPage() {
  return (
    <div className="bg-[#000000] h-screen">
      <div className="bg-[#202020]">
        <p className="text-[#fff] text-[64px] inter-font font-extrabold mb-2">
          Create more MEME in less time
        </p>
        <p className="text-[#fff] text-[20px] inter-font font-medium mb-12">
          Create and share memes instantly with MemeMaster! Choose from
          templates or upload your own images. Perfect for beginners and pros.
          Start creating and join the meme revolution!
        </p>

        <div className="flex items-center justify-center">
          <img
            src={mainImage}
            alt="main image"
            className="w-[1060px] h-[601px]"
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
