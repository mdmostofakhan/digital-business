import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const BusinessTow = () => {
  const [businesses, setBusinesses] = useState();
  console.log(businesses);
  useEffect(() => {
    fetch("best.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="bg-[#fafafa] py-24">
      <div className="w-[60%] mx-auto">
        <div className="">
          <h1 className="text-5xl text-center font-semibold">My Business Best Quality Services</h1>
          <p className="mt-8 text-xl text-center w-[60%] opacity-55">
            Amet minimam mollit non deserunt ullamco est sit aliqua dolar do
            amet sint. Velit officia consequat duis enim
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default BusinessTow;
