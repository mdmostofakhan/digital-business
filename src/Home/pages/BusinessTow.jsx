import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

const BusinessTow = () => {
  const [businesses, setBusinesses] = useState();
  console.log(businesses);
  useEffect(() => {
    fetch("best.json")
      .then((res) => res.json())
      .then((data) => setBusinesses(data));
  }, []);

  return (
    <div className="bg-[#fafafa] w-full py-24">
      <div className="w-[60%] container mx-auto">
        <div className=" flex justify-center items-center">
          <h1 className="lg:text-5xl md:text-3xl text-2xl text-center lg:w-[50%] md:[40%] font-semibold">
            My Business Best Quality Services
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="mt-10 text-xl text-center md:w-[40%] opacity-55">
            Amet minimam mollit non deserunt ullamco est sit aliqua dolar do
            amet sint. Velit officia consequat duis enim
          </p>
        </div>

        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center text-center  mt-10  ">
          {businesses?.map((business, index) => (
            <div key={index} className="bg-[#ffffff] border p-4">
              <div className="w-[32%] mx-auto">
                <Icon
                  className={` ${index == 0 ? "bg-[#37dcde]" : ""} 
                  ${index == 1? 'bg-[#ffd04c]': ''} 
                  ${index == 2? 'bg-[#20a3e9]': ''} 
                  ${index == 3? 'bg-[#37dcde]': ''} 
                  ${index == 4? "bg-[#ffd04c]" : ""}
                  ${index == 5 ? "bg-[#20a3e9]" : ""} 
                   mt-4 h-24 w-24 p-4  rounded-full text-white text-5xl`}
                  icon={business.icons}
                />
              </div>
              <h1 className="mt-4 text-2xl font-semibold">{business.title}</h1>
              <h1 className="mt-4 ">{business.text}</h1>
              <button className="my-4 text-[#ffd04c] text-xl">{business.button}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessTow;
