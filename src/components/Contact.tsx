import React from "react";
import "./style/Button.css"
const Contact = () => {
  return (
    <div className="bg-[#333333] text-white py-10">
      <div className="max-w-7xl mx-auto flex">
        <div className="w-1/2 pr-10 my-10">
          <p className="my-2 text-[20px]"> 
            The best way to ask questions, explore ideas, and let students show
            what they know
          </p>
          <h1 className="text-[56px] font-bold leading-tight my-2 py-4">
            Start motivating students.<span className="text-[#efa929]">In minutes.</span>
          </h1>
          <div className="flex justify-left my-4">
            <div className=" button-container bg-[#efa929] px-6 py-2 text-white text-left rounded-lg border-b-4 border-[#a97b26] my-4 mr-4 w-48">
              <p className="text-gray-300 text-sm">TEACHERS</p>
              <button className="text-lg">Sign Up for free</button>
            </div>
            <div className="button-container bg-[#F2F2F2] px-6 py-2 text-black text-left rounded-lg border-b-4 border-gray-300 my-4 ml-4 w-48">
  <p className="text-[#8854c0] text-sm">ADMINISTRATOR</p>
  <button className="button text-lg">Learn More</button>
</div>

          </div>
        </div>
        <div className="w-1/2 pl-10 relative my-10">
          <img
            src="https://quizizz.com/wf/assets/62fa6419161d3a174d681cb3_dot_20grid-p-800.png"
            alt="First Image"
            className="absolute top-0 right-0 w-[550px] h-full object-cover z-10"
          />
          <img
            src="https://quizizz.com/wf/assets/64f6d6f262069b42407b43db_6333fb9ca08e3adffcfc663b_Funding_CTA_Image-p-800.webp"
            alt="Second Image"
            className="absolute top-0 right-0 h-[409px] w-[550px] object-cover z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
