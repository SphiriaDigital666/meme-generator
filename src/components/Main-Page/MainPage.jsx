import React from "react";
import mainImage from "../../assets/main-page/main-image.jpg";
import eclipse01 from "../../assets/main-page/Ellipse 1.png";
import eclipse02 from "../../assets/main-page/Ellipse 2.png";
import eclipse03 from "../../assets/main-page/Ellipse 3.png";
import eclipse04 from "../../assets/main-page/Ellipse 4.png";

function MainPage() {
  return (
    <div className="bg-[#000000] h-screen flex items-center justify-center">
      <div className="bg-[#202020] container relative pb-20 pt-20">
        <p className="text-[#fff] text-[64px] inter-font font-extrabold mb-2">
          Create more
          <span
            style={{
              background: "linear-gradient(to right, #bf2d8e, #3362f0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-[64px] inter-font font-extrabold px-3"
          >
            MEME
          </span>
          in less time
        </p>
        <p className="text-[#fff] text-[20px] inter-font font-normal mb-12">
          Create and share memes instantly with MemeMaster! Choose from
          templates or upload your own images. <br /> Perfect for beginners and
          pros. Start creating and join the meme revolution!
        </p>

        {/* eclipse vectors */}

        <div className="absolute top-[40px] right-0">
          <img src={eclipse01} alt="eclipse01 image" className="w-[140px]" />
        </div>

        <div className="absolute bottom-[330px] right-[282px]">
          <img src={eclipse03} alt="eclipse03 image" className="w-[60px]" />
        </div>

        <div className="absolute top-[60px] left-0">
          <img src={eclipse03} alt="eclipse03 image" className="w-[60px]" />
        </div>

        {/* Parent container for mainImage and eclipse04 */}
        <div className="relative flex items-center justify-center">
          <div className="absolute bottom-[-80px] left-[213px] z-0">
            <img src={eclipse04} alt="eclipse04 image" className="w-[200px]" />
          </div>

          <div className="z-10">
            <div className="relative">
              <img src={mainImage} alt="main image" className="w-[850px]" />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {" "}
                <div className="bg-gradient-to-r from-[#cf2786] to-[#3b3cc9] w-max rounded-[5px] px-8 py-1  cursor-pointer">
                  <p className="inter-font text-[20px] font-extrabold text-[#fff]">
                    Connect Wallet
                  </p>
                </div>
                <div>
                  <p className="text-white text-[16px] font-normal pt-2">
                    Create and Share Memes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
