import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

const Business = () => {
  const [businesses, setBusiness] = useState();

  useEffect(() => {
    fetch("file.json")
      .then((res) => res.json())
      .then((data) => setBusiness(data));
    console.log(businesses);
  }, []);

  return (
    <div className="bg-[rgb(246,252,252)] py-32 w-full">
      <div className=" w-[60%] container mx-auto ">
        <h1 className="text-4xl text-center  font-semibold text-black">
          Meet exciting business features idea new box 
        </h1>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center md:gap-6 lg:gap-0 text-center">
          {businesses?.map((business, index) => (
            <div key={index}>
              <div className="w-1/2 mx-auto">
                <Icon
                  className={` ${index == 1 ? "bg-[#ffd04e]" : ""}  ${
                    index == 3 ? "bg-[#ff9b77]" : ""
                  } ${index == 2 ? "bg-[#21a4ea]" : ""} ${
                    index == 0 ? "bg-[#37dcde]" : ""
                  } border  w-32 h-32 p-7 mt-4 rounded-xl text-white`}
                  icon={business.icons}
                />
              </div>
              <h1 className="md:mt-10 m-4 text-xl  font-bold">{business.title}</h1>
              <h1 className="md:mt-6 mt-4 text-xl opacity-60 ">{business.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Business;
