import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const text = ["Home", "Features", "About", "services", "Blog", "Contact"];

  const [isMenuOpen, setIsMenuOpen] = useState(null);

  return (
    <div className="mt-8">
      <div className="flex justify-around items-center">
        <div className="flex justify-center items-center gap-4">
          <div className="relative">
            <div className="flex justify-center items-center rotate-45 bg-[rgb(33,161,234)] lg:w-20 w-14 h-14 lg:h-20 p-3 rounded-lg "></div>
            <h1 className="lg:text-5xl text-4xl text-white absolute lg:top-[16%] top-[8%] left-[30%]  font-bold">
              p
            </h1>
          </div>
          <h1 className="lg:text-5xl text-3xl text-black font-bold">
            Primrose
          </h1>
        </div>

        <div className={` bg-white flex items-center px-5`}>
          <div className="md:block hidden">
            <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-6 text-2xl font-medium text-black">
              {text?.map((text, index) => (
                <div key={index}>
                  <Link
                    className="hover:text-[rgb(33,161,234)] transition-all duration-300"
                    to={`/${text}`}
                  >
                    {text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${
              isMenuOpen ? "block lg:hidden" : "hidden"} 
              flex flex-col absolute top-20 shadow-2xl bg-white p-5 rounded-md w-full gap-4 text-2xl font-medium text-black`}
          >
            {text?.map((text, index) => (
              <div key={index}>
                <Link
                  className="hover:text-[rgb(33,161,234)] transition-all duration-300"
                  to={`/${text}`}
                >
                  {text}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6 ">
          <button className="border py-1 px-5 rounded-lg text-white bg-[rgb(33,161,234)]">
            Sign in
          </button>
          <Icon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl lg:hidden cursor-pointer"
            icon={isMenuOpen ? "mingcute:close-fill" : "ic:round-menu"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
