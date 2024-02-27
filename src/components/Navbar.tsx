import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className=" bg-white p-4">
      <div className="flex  items-center justify-between max-w-[95%] mx-auto">
        {/* Left side */}
        <div className="flex   items-center">
          {/* Logo */}
          <div className=" text-xl font-bold">
            <img src="https://quizizz.com/wf/assets/62fa6419161d3a641f681ceb_Logo.svg" />
          </div>
          {/* Nav links */}
          <div className="ml-6 space-x-4">
            <a href="#" className=" hover:text-gray-300">
              For Schools
            </a>
            <a href="#" className=" hover:text-gray-300">
             For Business
            </a>
            <a href="#" className=" hover:text-gray-300">
              Plans
            </a>
            <a href="#" className=" hover:text-gray-300">
              Solutions
            </a>
            <a href="#" className=" hover:text-gray-300">
              Resources
            </a>
          </div>
        </div>

        {/* Middle part - Empty */}
        <div></div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          
          <button className="border-2 text-[#5D2057] border-[#f3f3f3]  py-2 px-4 rounded-md">
            School Plan Qoute
          </button>
          
          <button className="border-2 text-[#5D2057] border-gray-300 border-[#f3f3f3]  py-2 px-4 rounded-md">
            Enter Code
          </button>

          <button className=" bg-[#EdE6f6] text-[#5D2057] text-[16px]  py-2 px-4 rounded-md">
            Login
          </button>
          <button className="bg-[#9a42a4] text-white py-2 px-4 rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
