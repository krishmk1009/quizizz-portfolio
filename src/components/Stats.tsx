import React from "react";
import "./style/Button.css";

const Stats = () => {
  return (
    <div className="bg-[#f7f7f7] py-20 my-20 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="md:text-[22px] text-[18px]"> Experience in 4+ Startups</p>
        <h3 className="md:text-[40px] text-[30px] my-3 font-bold">
          <span className="text-[#8840c0]">Full Stack Developer </span>
          Ready to Elevate Your Team
        </h3>
        <a href="https://www.linkedin.com/in/krushnamodhave/" target="blank">
          <div className="button-container bg-[#8840c0] px-6 py-4 text-white mx-auto rounded-lg border-b-4 border-violet-800 my-6 mx-4 md:w-1/3 w-2/3 ">
            <button className="text-[18px]">Connect me on Linkedin</button>
          </div>
        </a>
      </div>
      <div className="md:flex hidden mx-auto justify-center my-10">
        <div className="mx-6">
          <a href="https://github.com/krishmk1009" target="blank">
            <img
              className="md:h-[40px]"
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            />
          </a>
        </div>
        <div className="mx-6">
          <a href="https://peerlist.io/krishmk1009" target="blank">
            <img
              className="md:h-[40px]"
              src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full.svg"
            />
          </a>
        </div>
        <div className="mx-6">
          <a href="https://www.linkedin.com/in/krushnamodhave/" target="blank">
            <img
              className="md:h-[40px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
            />
          </a>
        </div>
        <div className="md:mx-6">
          <a href="https://twitter.com/ModhaveKrushna" target="blank">
            <img
              className="h-[40px]"
              src="https://i.pinimg.com/736x/99/65/5e/99655e9fe24eb0a7ea38de683cedb735.jpg"
            />
          </a>
        </div>
        <div className="mx-6">
          <a href="https://stackoverflow.com/users/20028533/krish" target="blank">
            <img
              className="h-[40px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png"
            />
          </a>
        </div>
        <div className="mx-6">
        <a href="https://medium.com/@krushnamk1009" target="blank">

          <img
            className="h-[40px]"
            src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
          />
                    </a>

        </div>
      </div>
    </div>
  );
};

export default Stats;
