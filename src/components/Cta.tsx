import React from "react";
import "./style/Button.css"
import group from "../assets/group.png"

const Cta = () => {
  return (
    <div className="max-w-7xl mx-auto justify-center md:flex bg-gradient-to-r from-[#e6d3ff] to-[#f4ecff]  rounded-3xl p-4 px-6 my-10">
      <div className="md:w-[50%] my-auto md:pl-5 md:ml-5">
        <img
          className="md:h-[200px] h-auto"
          src={group}
        />
      </div>
      <div className="md:w-[50%]  md:my-10 my-5 md:pl-5 md:ml-5">
        <h1 className="md:text-[40px] md:w-5/6 text-[30px] font-bold leading-tight md:text-left text-center">A MERN stack developer with a passion for Coding
  <span className="text-[#8854c0]"> & Startups</span>
</h1>
<a href="https://www.punekarnews.in/pune-students-create-ai-powered-whatsapp-chatbot-whatsgpt-to-offer-instant-information-and-assistance-for-everyday-tasks/" target="blank">


        <div className="button-container bg-[#8854c0] px-6 py-4 text-white rounded-lg border-b-4 border-violet-800 my-6 md:w-[60%] mt-5  ">
          <button className="text-[18px]">
          Explore the Feature
          </button>
        </div>
        </a>
      </div>
    </div>
  );
};

export default Cta;
