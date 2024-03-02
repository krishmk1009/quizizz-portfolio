import React, { useState } from "react";

interface ImageData {
  heading: string;
  content: string;
  imgUrl: string;
}

const Project: React.FC = () => {
  const [selectedHeading, setSelectedHeading] = useState<string | null>(null);

  const imageList: ImageData[] = [
    {
      heading: "Interactive Lessons",
      content:
        " Easily embed images and video, import existing slides, and seamlessly blend in assessment.",
      imgUrl:
        "https://quizizz.com/wf/assets/64f6d64977ade53deb4d94cd_6333995b5cbe41c32606ffba_Surface_Pro_8_-_13-min-p-800.webp",
    },
    {
      heading: "Spin the Wheels",
      content:
        " Easily embed images and video, import existing slides, and seamlessly blend in assessment.",
      imgUrl:
        "https://quizizz.com/wf/assets/64f6d64977ade53deb4d94cd_6333995b5cbe41c32606ffba_Surface_Pro_8_-_13-min-p-800.webp",
    },
    {
      heading: "Whiteboard",
      content:
        " Easily embed images and video, import existing slides, and seamlessly blend in assessment.",
      imgUrl:
        "https://quizizz.com/wf/assets/64f6d6747e97ba27943c2985_6333a5c56094e4553c184ce9_app_14-min-p-800.webp",
    },
  ];

  const handleClick = (heading: string) => {
    setSelectedHeading(heading);
  };

  return (
    <div className="flex max-w-7xl mx-auto my-10">
      <div className="w-[45%]  p-4 mx-5">
        <p className="text-left my-5 text-[18px] text-[#212121]  tracking-widest	font-semibold ">
          INSTRUCTION
        </p>
        <h2 className=" font-bold text-[56px] mb-4">
          {" "}
          <span className="text-[#2d9da6]">Beyond</span> quizzes
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
