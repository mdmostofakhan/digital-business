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
          Meet exciting business features idea
        </h1>

        <div className="mt-16 grid grid-cols-4 justify-center text-center">
          {businesses?.map((business, index) => (
            <div key={index} >
             
                <div className="w-1/2 mx-auto">
                <Icon
                  className= {`${(index == 3) ? 'bg-[#ff9b77]' : ''} ${(index == 2) ? 'bg-[#21a4ea]' : ''} ${(index == 0) ? 'bg-[#37dcde]' : 'bg-[#ffd04e] '} border  w-32 h-32 p-7 rounded-xl text-white`}
                  icon={business.icons}
                />
                </div>
              
              <h1 className="mt-10 text-xl font-bold">
                {business.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Business;