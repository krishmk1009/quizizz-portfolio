import React, { useState } from "react";
import whatsgpt from "../assets/whatsgpt.png"

interface ImageData {
  heading: string;
  content: string;
  imgUrl: string;
}

const Project: React.FC = () => {
  const [selectedHeading, setSelectedHeading] = useState<string | null>("Interactive Lessons");

  const imageList: ImageData[] = [
    {
      heading: "Freelon",
      content:
        " Online Salon Booking Platform: Freelon, Led the successful implementation of a salon booking platform in Ahmednagar..",
      imgUrl:
        "https://i.ibb.co/JvkDgnQ/freelonimg.png",
    },
    {
      heading: "WhatsGPT",
      content:
        " Worked collaboratively as a member of a team of 4 to design and develop a versatile AI chatbot using Node.js, MongoDB, WebApi's",
      imgUrl:
        "https://i.ibb.co/cY5ypn0/whatsgpt.png",
    },
    {
      heading: "TradingCompass",
      content:
        " Contributed as a front-end developer to create a user-friendly financial data visualization platform.",
      imgUrl:
        "https://i.ibb.co/9q0KykG/tradingc.png",
    },
  ];

  const handleClick = (heading: string) => {
    setSelectedHeading(heading);
  };

  return (
    <div className="flex max-w-7xl mx-auto my-10">
      <div className="w-[45%]  p-4 mx-5">
        <p className="text-left my-5 text-[18px] text-[#212121]  tracking-widest	font-semibold ">
          PROJECTS
        </p>
        <h2 className=" font-bold text-[56px] mb-4">
          {" "}
          <span className="text-[#2d9da6]">Explore</span> Projects
        </h2>
        <ul>
          {imageList.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item.heading)}
              className={`cursor-pointer ${
                selectedHeading === item.heading ? "bg-[#f3f3f3]" : ""
              } p-2 rounded pr-5 w-[80%] my-4 rounded-xl`}
            >
              <p className="text-[24px] px-10 pt-2">{item.heading}</p>
              {selectedHeading === item.heading && (
                <p className=" px-10 py-3 text-[18px]">{item.content}</p>
              )}{" "}
             {selectedHeading !== item.heading && <hr className="my-4 border-gray-200 " />}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[55%] p-4 mt-20">
        {selectedHeading && (
          <img
            src={
              imageList.find((item) => item.heading === selectedHeading)?.imgUrl
            }
            alt={selectedHeading}
            className="w-full"
          />
        )}
      </div>
    </div>
  );
};

export default Project;
