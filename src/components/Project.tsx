import React, { useState } from "react";
import whatsgpt from "../assets/whatsgpt.png";

interface ImageData {
  heading: string;
  content: string;
  imgUrl: string;
}

const Project: React.FC = () => {
  const [selectedHeading, setSelectedHeading] = useState<string | null>(
    "Freelon"
  );

  const imageList: ImageData[] = [
    {
      heading: "Freelon",
      content:
        " Online Salon Booking Platform: Freelon, Led the successful implementation of a salon booking platform in Ahmednagar..",
      imgUrl: "https://i.ibb.co/JvkDgnQ/freelonimg.png",
    },
    {
      heading: "WhatsGPT",
      content:
        " Worked collaboratively as a member of a team of 4 to design and develop a versatile AI chatbot using Node.js, MongoDB, WebApi's",
      imgUrl: "https://i.ibb.co/cY5ypn0/whatsgpt.png",
    },
    {
      heading: "TradingCompass",
      content:
        " Contributed as a front-end developer to create a user-friendly financial data visualization platform.",
      imgUrl: "https://i.ibb.co/9q0KykG/tradingc.png",
    },
  ];

  const handleClick = (heading: string) => {
    setSelectedHeading(heading);
  };

  return (
    <div className="md:flex max-w-7xl mx-auto my-10">
      <div className="md:w-[45%]  md:p-4 mx-5">
        <p className="text-left my-5 md:text-[18px] text-[15px] text-[#212121]  tracking-widest	font-semibold ">
          PROJECTS
        </p>
        <h2 className=" font-bold md:text-[56px] text-[30px] mb-4">
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
              } p-2 rounded md:pr-5 md:w-[80%] my-4 rounded-xl`}
            >
              <p className="text-[24px] md:px-10 pl-2 pt-2">{item.heading}</p>
              {selectedHeading === item.heading && (
                <div>
                  <p className=" md:px-10 px-2 py-3 text-[18px]">{item.content}</p>
                  <img
                    src={
                      imageList.find((item) => item.heading === selectedHeading)
                        ?.imgUrl
                    }
                    alt={selectedHeading}
                    className="w-full md:hidden"
                  />
                </div>
              )}{" "}
              {selectedHeading !== item.heading && (
                <hr className="my-4 md:border-gray-200 border-gray-300 " />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-[55%] md:block hidden p-4 mt-20">
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
