import React from "react";
import { Icon } from "@iconify/react";

const Solutions = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-[rgb(33,161,234)] py-24 mb-12 mt-20">
        <h1 className="  text-center text-5xl text-white font-semibold  ">
          Any Need Solutions Business Idea
        </h1>

        <div className=" relative mt-8 text-center">
          <input
            className={`p-4 lg:w-[450px] bg-white text-center text-2xl`}
            ems-center
            type="text"
            name="search"
            placeholder="Search your dream services"
            required
          />
          <div className="text-3xl left-[40%] top-[30%] absolute">
            <Icon icon="iconamoon:search-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
