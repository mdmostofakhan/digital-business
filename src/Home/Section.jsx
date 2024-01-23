import React from "react";

const Section = () => {
  return (
    <div className="w-[60%] mx-auto">
        <div className="  my-24 md:flex-row flex-col flex justify-center md:gap-28 gap-8 items-center ">
      <div className="bg-cover bg-no-repeat lg:w-full md:w-[70%]   ">
        <img
        className=""
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="">
        <h1 className="font-bold text-2xl lg:text-5xl">About us our company</h1>
        <p className="lg:mt-8 mt-4 md:text-2xl text-xl">Amet minimam mollit new items non deserunt ullamco est sit aliqua dolar do  amet sint. Velit officia consequat duis enim</p>
        <button className="border bg-yellow-400 px-6 text-white lg:text-xl py-2 md:mt-8 mt-4">Lorem more</button>
      </div>
    </div>
    </div>
  );
};

export default Section;

