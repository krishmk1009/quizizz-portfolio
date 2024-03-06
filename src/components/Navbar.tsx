import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white p-4 ${isSticky ? 'fixed top-0 left-0 right-0 z-10' : ''}`}>
      <div className="flex items-center justify-between max-w-[95%] mx-auto">
        <div className="flex items-center">
          <div className="text-xl font-bold">
            <img src="https://quizizz.com/wf/assets/62fa6419161d3a641f681ceb_Logo.svg" alt="Quizizz Logo" />
          </div>
          <div className="ml-6 space-x-4">
            <a href="#" className="hover:text-gray-300">
              For Schools
            </a>
            <a href="#" className="hover:text-gray-300">
              For Business
            </a>
            <a href="#" className="hover:text-gray-300">
              Plans
            </a>
            <a href="#" className="hover:text-gray-300">
              Solutions
            </a>
            <a href="#" className="hover:text-gray-300">
              Resources
            </a>
          </div>
        </div>

        <div></div>
        

        <div className="flex items-center space-x-4">
          <button className="border-2 text-[#5D2057] border-[#f3f3f3] py-2 px-4 rounded-md">
            School Plan Quote
          </button>

          <button className="border-2 text-[#5D2057] border-gray-300 border-[#f3f3f3] py-2 px-4 rounded-md">
            Enter Code
          </button>

          <button className="bg-[#EdE6f6] text-[#5D2057] text-[16px] py-2 px-4 rounded-md">
            Github
          </button>
          <button className="bg-[#9a42a4] text-white py-2 px-4 rounded-md">
            Linkedin
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
