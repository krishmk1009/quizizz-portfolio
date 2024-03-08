import React from "react";
import "./style/Button.css";
import skills from "../assets/skills.png";
const Client = () => {
  return (
    <div className="my-5">
      <div className="flex justify-center my-10">
        <div>
          <img className="h-[174px] w-[860px]" src={skills} />
        </div>
      </div>
      <p className="text-left text-center my-5 text-[18px] text-[#212121]  tracking-widest	font-semibold ">
          Experience
        </p>
      <div className="flex max-w-5xl mx-auto">
        
        <div className="p-5 border-2 border-red-500 h-[340px] w-[320px] rounded-lg relative mx-3">
          <div className="flex">
            <img
              className="h-[84px] w-[84px] rounded-lg"
              src="https://w1.pngwing.com/pngs/221/86/png-transparent-india-symbol-vodafone-prepaid-mobile-phone-mobile-phones-postpaid-mobile-phone-logo-vodafone-uk-vodafone-india.png"
            />
            <div className="mx-4">
              <p className="text-[18px]  font-Quicksand font-semibold">GET</p>
              <p>Vodafone Intelligent Solution</p>
            </div>
          </div>
          <div className="my-5">
            <p className="font-Quicksand">
            • Currently undergoing comprehensive training program to develop a
              strong foundation in VOIS.<br />
               • Actively participating in team
              discussions and training sessions to gain insights into the
              company's projects, processes, and methodologies.
            </p>
          </div>
          <div className="absolute left-[-8px] bottom-[-8px] border-l-8 border-b-8 border-red-500 h-full w-full pointer-events-none rounded-lg"></div>
        </div>
        <div className="p-5 border-2 border-blue-500 h-[340px] w-[320px] rounded-lg relative mx-3">
          <div className="flex">
            <img
              className="h-[84px] w-[84px] rounded-lg"
              src="https://pbs.twimg.com/profile_images/1011383337326243840/Ztw0Ofb6_400x400.jpg"
            />
            <div className="mx-4">
              <p className="text-[18px] font-semibold">Web Developer</p>
              <p>Wealo Studio</p>
            </div>
          </div>
          <div className="my-5">
            <p className="font-Quicksand">
            • Designing and building the website frontend.<br />
            • Creating the website architecture.<br />
            • Designing and managing the website back-end including database and server integration.
            </p>
          </div>
          <div className="absolute left-[-8px] bottom-[-8px] border-l-8 border-b-8 border-blue-500 h-full w-full pointer-events-none rounded-lg"></div>
        </div>
        <div className="p-5 border-2 border-cyan-500 h-[340px] w-[320px] rounded-lg relative mx-3">
          <div className="flex">
            <img
              className="h-[84px] w-[84px] rounded-lg"
              src="data:image/png;base64,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"
            />
            <div className="mx-4">
              <p className="text-[18px] font-semibold">Wordpress Developer</p>
              <p>CyberArtLab Solutions </p>
            </div>
          </div>
          <div className="my-5">
            <p className="font-Quicksand">
            • Identified and reported bugs, working closely with the development team to ensure timely resolution and a seamless user experience.<br />
• Interacted with clients to provide high-quality customer service and ensure satisfaction with the project.
            </p>
          </div>
          <div className="absolute left-[-8px] bottom-[-8px] border-l-8 border-b-8 border-cyan-500 h-full w-full pointer-events-none rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Client;
