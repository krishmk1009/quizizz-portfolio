import React from "react";
import "./style/Button.css";

const Hero = () => {
  return (
    <div className="relative mx-auto text-center py-5">
      {/* Background grid image */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Pixel_grid_4000x2000.svg/1200px-Pixel_grid_4000x2000.svg.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-[50px] py-5 mt-10 font-poppins font-extrabold	">
          One Person, Countless Skills
        </h1>
        <p className="text-[22px] font-Quicksand">
          A Full stack developer application, Presented by Krushna, a 2023
          Computer Science Graduate . &#10024;
        </p>
        <div className="flex justify-center my-4">
          <div className=" button-container bg-[#8854c0] px-6 py-2 text-white text-left rounded-lg border-b-4 border-violet-800 my-4 mx-4 w-48">
            <p className="text-gray-300 text-sm font-poppins">RESUME</p>
            <button className="text-lg font-Quicksand">Download CV</button>
          </div>
          <div className=" button-container bg-[#F2F2F2] px-6 py-2 text-black text-left rounded-lg border-b-4 border-gray-300 my-4 mx-4 w-48">
            <p className="text-[#8854c0] text-sm font-poppins">PROFILE</p>
            <button className="text-lg font-Quicksand">Github Profile</button>
          </div>
        </div>

        <div className="flex cards text-center max-w-[90%] mx-auto my-6 font-poppins font-bold">
          <div className="w-1/5 bg-[#A8CBEB]  mx-4 rounded-lg ">
            <h3 className="text-left py-6 px-5 text-black text-[24px]">Math</h3>
            <img
              className="pl-4"
              src="https://quizizz.com/wf/assets/657aeb1801fdaf8893523684_Card_Visual.webp"
            />
          </div>
          <div className="w-1/5 bg-[#74d5dc]  mx-4 rounded-lg ">
            <h3 className="text-left py-6 px-5 text-black text-[24px]">ELA</h3>
            <img
              className="pl-4"
              src="https://quizizz.com/wf/assets/657aeb18ebabe313508c64f9_Card_Visual-1.webp"
            />
          </div>
          <div className="w-1/5 bg-[#f3ce8c]  mx-4 rounded-lg ">
            <h3 className="text-left py-6 px-5 text-black text-[24px]">
              Science
            </h3>
            <img
              className="pl-4"
              src="https://quizizz.com/wf/assets/657c1ed6f7f3173090038bce_Card_Visual.webp"
            />
          </div>
          <div className="w-1/5 bg-[#e99baa]  mx-4 rounded-lg ">
            <h3 className="text-left py-6 px-5 text-black text-[24px]">
              Social Studies
            </h3>
            <img
              className="pl-4"
              src="https://quizizz.com/wf/assets/657aeb186ddc5009843f239f_Card_Visual-3.webp"
            />
          </div>
          <div className="w-1/5 bg-[#d6b3d3]  mx-4 rounded-lg ">
            <h3 className="text-left py-6 px-5 text-black text-[24px]">
              Elementary
            </h3>
            <img
              className="pl-4"
              src="https://quizizz.com/wf/assets/657aeb1857b46bc92ea2cf53_Card_Visual-4.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
