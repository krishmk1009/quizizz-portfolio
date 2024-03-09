import React from "react";
import one from "../assets/1.png"
import two from "../assets/2.png"
import three from "../assets/3.png"

const Feature = () => {
  return (
    <div className="max-w-[65rem] mx-auto my-10 px-5 mx-5">
      <div className="flex justify-center text-center my-10">
        <h2 className=" md:text-[56px]  text-[30px] md:w-2/3 font-bold leading-tight font-poppins ">
        Passion for thinking <br />

          <span className="text-[#efa929]"> out of the box</span>{" "}
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-0">
        <div className="py-4 mx-auto">
          <div className="text-center">
            <img
              className="md:h-[120px] h-[50px] mx-auto "
              src={one}
            />
          </div>
          <div className="flex text-center">
            <p className="md:text-[20px] text-[15px] my-5">Cofounded Startup in 2nd year </p>
          </div>
        </div>
        <div className="  py-10">
          <img
            className="h-[80px] "
            src="https://quizizz.com/wf/assets/62fa641a161d3af10c681d0a_Yellow_Arrow.svg"
          />
        </div>
        <div className=" mx-auto  pt-10 mx-5 mt-[4rem]">
          <img
            className="md:h-[120px] h-[50px] mx-auto"
            src={two}
          />
            <div className="flex text-center">
            <p className="md:text-[20px] text-[15px] my-5">Runnner up in Ideathon</p>
          </div>
        </div>
        <div className="   pt-10  ">
          <img
            className="h-[120px] "
            src="https://quizizz.com/wf/assets/62fa641a161d3aa501681cf6_Yellow_Arrow_2.svg"
          />
        
        </div>
        <div className="py-4 mx-auto">
          <div className="text-center">
            <img
              className="md:h-[120px] h-[50px] mx-auto "
              src={three}
            />
          </div>
          <div className="flex text-center">
            <p className="md:text-[20px] text-[15px] my-5">Featured in News Article for product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
