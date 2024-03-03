import React from "react";
import "./style/Button.css"

const Cta = () => {
  return (
    <div className="max-w-7xl mx-auto justify-center flex bg-gradient-to-r from-[#e6d3ff] to-[#f4ecff]  rounded-3xl p-4 px-6 my-10">
      <div className="w-[50%] my-auto pl-5 ml-5">
        <img
          className="h-[200px] "
          src="https://quizizz.com/wf/assets/64c5f50a4898da1574f4e06b_LogosQFW-p-800.png"
        />
      </div>
      <div className="w-[50%]  my-10 pl-5 ml-5">
        <h1 className="text-[40px] w-5/6 font-bold leading-tight">A MERN stack developer with a passion for Coding
  <span className="text-[#8854c0]"> & Startups</span>
</h1>
        <div className="button-container bg-[#8854c0] px-6 py-4 text-white rounded-lg border-b-4 border-violet-800 my-6 w-[60%] mt-5  ">
          <button className="text-[18px]">
            Quizizz for schools and districts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
