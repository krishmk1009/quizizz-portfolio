import "./style/Button.css";
const Contact = () => {
  return (
    <div className="bg-[#333333] text-white md:py-10 py-5">
      <div className="max-w-7xl mx-auto md:flex">
        <div className="md:w-1/2 md:pr-10 my-10">
          <p className="my-2 md:text-[20px] text-[16px] text-center md:text-left px-4 md:px-0">
            With strong frontend and web development skills, coupled with
            leadership abilities, I'm poised to elevate your team's performance
            and drive success
          </p>
          <h1 className="md:text-[56px] text-[30px] text-center md:text-left px-4 md:px-0 font-bold leading-tight my-2 py-4">
            Excited to Contribute at
            <span className="text-[#efa929]"> Quizizz.</span>
          </h1>
          <div className="flex md:justify-left justify-center my-4 mx-2 ">
            <a href="mailto:krushnamk1009@gmail.com">
              <div className=" button-container bg-[#efa929] px-6 py-2 text-white text-left rounded-lg border-b-4 border-[#a97b26] my-4 mx-1 md:mx-0  md:mr-4 w-36 md:w-44">
                <p className="text-gray-300 text-sm">INFORMATION</p>
                <button className="text-lg">Contact Me</button>
              </div>
            </a>
            <a href="https://github.com/krishmk1009" target="blank">
              <div className="button-container  bg-[#F2F2F2] px-6 py-2 text-black text-left rounded-lg border-b-4 border-gray-300 my-4  mx-1 md:mx-0 md:ml-4 w-36 md:w-44">
                <p className="text-[#8854c0] text-sm">SOCIAL</p>
                <button className="button text-lg">GITHUB</button>
              </div>
            </a>
          </div>
        </div>
        <div className="w-1/2 hidden md:block pl-10 relative my-10">
          <img
            src="https://quizizz.com/wf/assets/62fa6419161d3a174d681cb3_dot_20grid-p-800.png"
            alt="First Image"
            className="absolute top-0 right-0 w-[550px] h-full object-cover z-10"
          />
          <img
            src="https://quizizz.com/wf/assets/64f6d6f262069b42407b43db_6333fb9ca08e3adffcfc663b_Funding_CTA_Image-p-800.webp"
            alt="Second Image"
            className="absolute top-0 right-0 h-[409px] w-[550px] object-cover z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
