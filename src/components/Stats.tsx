import React from "react";
import "./style/Button.css"

const Stats = () => {
  return (
    <div className="bg-[#f7f7f7] py-20 my-20 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="text-[22px]"> Experience in 4+ Startups</p>
        <h3 className="text-[40px] my-3 font-bold">
          <span className="text-[#8840c0]">Full Stack Developer </span>
          Ready to Elevate Your Team


        </h3>
        <div className="button-container bg-[#8840c0] px-6 py-4 text-white mx-auto rounded-lg border-b-4 border-violet-800 my-6 mx-4 w-1/3">
          <button className="text-[18px]">Connect me on Linkedin</button>
        </div>
      </div>
      <div className="flex mx-auto justify-center my-10">
        <div className="mx-6">
          <img className="h-[40px]" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
        </div>
        <div className="mx-6">
          <img className="h-[40px]" src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full.svg" />
        </div>
        <div className="mx-6">
          <img className="h-[40px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
        </div>
        <div className="mx-6">
          <img className="h-[40px]" src="https://i.pinimg.com/736x/99/65/5e/99655e9fe24eb0a7ea38de683cedb735.jpg" />
        </div>
        <div className="mx-6">
          <img className="h-[40px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png" />
        </div>
        <div className="mx-6">
          <img className="h-[40px]" src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png" />
        </div>
       
        
      </div>
    </div>
  );
};

export default Stats;
