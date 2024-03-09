import React from "react";
import "./style/Button.css";
import back from "../assets/back.png"
import block from "../assets/block.png"
import dev from "../assets/dev.png"
import cicd from "../assets/cicd.png"
import multi from "../assets/multi.png"


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
      <div className="relative z-10 ">
        <h1 className="md:text-[50px] text-[30px] py-5 px-4 md:px-0  md:mr-5 md:mt-10 font-poppins font-extrabold	">
          One Person, Countless Skills
        </h1>
        <p className="md:text-[22px] text-[18px] px-4 md:px-0 font-Quicksand  md:mr-5">
          A Full stack developer application, Presented by Krushna, a 2023
          Computer Science Graduate . &#10024;
        </p>
        <div className="md:flex   justify-center my-4">
          <div className="mx-auto button-container bg-[#8854c0] px-6 py-2 text-white text-left rounded-lg border-b-4 border-violet-800 my-4 md:mx-4 md:w-48 w-2/3 ">
            <p className="text-gray-300 md:text-sm font-poppins">RESUME</p>
            <button className="text-lg font-Quicksand">Download CV</button>
          </div>
          <div className="mx-auto button-container bg-[#F2F2F2] px-6 py-2 text-black text-left rounded-lg border-b-4 border-gray-300 my-4 md:mx-4 md:w-48 w-2/3">
            <p className="text-[#8854c0] md:text-sm font-poppins">PROFILE</p>
            <button className=" text-lg font-Quicksand">Github Profile</button>
          </div>
        </div>

        <div className="flex cards-container text-center md:max-w-[90%] mx-auto my-6 font-poppins font-bold overflow-x-auto">
  <div className="flex">
    <div className="md:w-1/5 h-fit bg-[#A8CBEB] md:mx-4 mx-5 rounded-lg ">
      <h3 className="text-left py-6 px-5 text-black text-[24px]">Backend</h3>
      <img className="md:pl-4 pl-2" src={back} />
    </div>
    <div className="md:w-1/5 bg-[#74d5dc] md:mx-4 mx-5 rounded-lg ">
      <h3 className="text-left py-6 px-5 text-black text-[24px]">Frontend</h3>
      <img className="md:pl-4 pl-2" src={dev} />
    </div>
   
    <div className="md:w-1/5 bg-[#f3ce8c] md:mx-4 hidden md:block mx-2 rounded-lg ">
      <h3 className="text-left py-6 px-5 text-black text-[24px]">CICD</h3>
      <img className="md:pl-4 pl-2" src={cicd} />
    </div>
    <div className="md:w-1/5 h-fit bg-[#e99baa] md:mx-4 mx-5   rounded-lg ">
      <h3 className="text-left py-6 px-5 text-black md:text-[24px] text-[20px]">Blockchain</h3>
      <img className="md:pl-4 pl-2" src={block} />
    </div>
    <div className="md:w-1/5 bg-[#d6b3d3] md:mx-4  mx-5 hidden md:block rounded-lg ">
      <h3 className="text-left py-6 px-5 text-black text-[24px]">Other Tech</h3>
      <img className="md:pl-4 pl-2" src={multi} />
    </div>
  </div>
</div>

    </div>
    </div>
  );
};

export default Hero;
