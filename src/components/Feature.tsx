import React from "react";

const Feature = () => {
  return (
    <div className="max-w-[65rem] mx-auto my-10">
      <div className="flex justify-center text-center my-10">
        <h2 className=" text-[56px] w-2/3 font-bold leading-tight ">
          Trusted by teachers in{" "}
          <span className="text-[#efa929]">90% of U.S. Schools</span>{" "}
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-0">
        <div className="py-4 mx-auto">
          <div className="text-center">
            <img
              className="h-[120px] mx-auto "
              src="https://quizizz.com/wf/assets/62fbfabe439c68667fe6896a_VectoriseIcons_MarketingWebsite-04.svg"
            />
          </div>
          <div className="flex text-center">
            <p className="text-[20px] my-5">Save teachers 3.5 hrs/week(1)</p>
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
            className="h-[120px] mx-auto"
            src="https://quizizz.com/wf/assets/62fbfabcdadc300b7afb716e_VectoriseIcons_MarketingWebsite-02.svg"
          />
            <div className="flex text-center">
            <p className="text-[20px] my-5">Reduce test-taking anxiety(3)</p>
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
              className="h-[120px] mx-auto "
              src="https://quizizz.com/wf/assets/63067295229d7a743ba690ff_Balloon_Anxiety.svg"
            />
          </div>
          <div className="flex text-center">
            <p className="text-[20px] my-5">Reduce test-taking anxiety(3)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
