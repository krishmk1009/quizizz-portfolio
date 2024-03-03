import React from "react";
import "./style/Button.css"

const Client = () => {
  return (
    <div className="my-5">
      <div className="flex justify-center my-10">
        <div>
          <img
            className="h-[174px] w-[860px]"
            src="https://quizizz.com/wf/assets/6501a46f763d217ede2fac83_LOGOs_hidef-p-1080.webp"
          />
        </div>
      </div>
      <div className="flex max-w-5xl mx-auto">
        <div className="p-5 border-2 border-green-500 h-[340px] w-[320px] rounded-lg relative mx-3">
          <div className="flex">
            <img
              className="h-[84px] w-[84px] rounded-lg"
              src="https://quizizz.com/wf/assets/64f9a97613d5e951cfcdbdd2_63340a7aebba5b59fb70b5a8_Jasmine.webp"
            />
            <div className="mx-4">
              <p className="text-[18px]  font-Quicksand">Emily Stock</p>
              <p>High School Special Education Teacher</p>
            </div>
          </div>
          <div className="my-5">
            <p className="font-Quicksand">
            “I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.”

            </p>
          </div>
          <div className="absolute left-[-8px] bottom-[-8px] border-l-8 border-b-8 border-green-500 h-full w-full pointer-events-none rounded-lg"></div>
        </div>
        <div className="p-5 border-2 border-blue-500 h-[340px] w-[320px] rounded-lg relative mx-3">
          <div className="flex">
            <img
              className="h-[84px] w-[84px] rounded-lg"
              src="https://quizizz.com/wf/assets/64f9a97613d5e951cfcdbdd2_63340a7aebba5b59fb70b5a8_Jasmine.webp"
            />
            <div className="mx-4">
              <p className="text-[18px] font-semibold">Emily Stock</p>
              <p>High School Special Education Teacher</p>
            </div>
          </div>
          <div className="my-5">
            <p className="font-Quicksand">
              “Since we do a lot of real life math skills, I love using pictures
              as answers to questions so if they have a hard time reading they
              can just go by the visual.”
            </p>
          </div>
          <div className="absolute left-[-8px] bottom-[-8px] border-l-8 border-b-8 border-blue-500 h-full w-full pointer-events-none rounded-lg"></div>
        </div>
        <div className="p-5 border-2 border-violet-500 h-[340px] w-[320px] rounded-lg relative mx-3">
          <div className="flex">
            <img
              className="h-[84px] w-[84px] rounded-lg"
              src="https://quizizz.com/wf/assets/64f98ee083d5fe55063d3a4a_63340b3d75515b4697efabae_Scott.webp"
            />
            <div className="mx-4">
              <p className="text-[18px] font-semibold">Emily Stock</p>
              <p>High School Special Education Teacher</p>
            </div>
          </div>
          <div className="my-5">
            <p className="font-Quicksand">
              “Since we do a lot of real life math skills, I love using pictures
              as answers to questions so if they have a hard time reading they
              can just go by the visual.”
            </p>
          </div>
          <div className="absolute left-[-8px] bottom-[-8px] border-l-8 border-b-8 border-violet-500 h-full w-full pointer-events-none rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Client;
