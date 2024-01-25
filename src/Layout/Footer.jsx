import React from "react";
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div>
       <div className="bg-blue-100 bg-opacity-40 py-12">
        <div className="mx-auto container ">
      <footer className="flex  justify-around items-center mt-12">
        <nav>
        <div>
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
        <div className="mt-12  flex justify-center items-center flex-col">
          <p className="text-2xl w-[60%]  opacity-85">Amet minim mollit non deserunt ullamco est</p>
          <div className="mt-6 flex justify-center items-center  mr-16 gap-5 ">
           <Icon className="text-4xl" icon="skill-icons:gmail-light" />
           <Icon className="text-4xl text-[#167ddc]" icon="ic:outline-facebook" />
           <Icon className="text-4xl " icon="skill-icons:twitter"  />
           <Icon className="text-4xl text-[#007ab5]" icon="cib:linkedin-in" />
          </div>
          </div>
        </div>
        </nav>
        <nav>
            <h1 className="text-2xl font-semibold">Information</h1>
            <div className="" >
                <p className="mt-12 text-xl">Home</p>
                <p className="mt-2 text-xl">Features</p>
                <p className="mt-2 text-xl">About Us</p>
                <p className="mt-2 text-xl">Services</p>
               
            </div>
        </nav>
        <nav>
            <h1 className="text-2xl font-semibold">Helpful links</h1>
            <div>
                <p className="mt-12 text-xl">Partners</p>
                <p className="mt-2 text-xl">Careers</p>
                <p className="mt-2 text-xl">Press</p>
                <p className="mt-2 text-xl">Community</p>
            </div>
        </nav>
        <nav>
        <h1 className="text-2xl font-semibold">Address</h1>
        <div>
             <p className="mt-12 text-xl">Mohammodpor</p>
             <p className="mt-2 text-xl">Dhaka, Bangladesh</p>
        </div>
        </nav>
      </footer>
    </div>
    </div>
    <div className="bg-blue-600 w-full py-12">
        <h1 className="text-white text-2xl text-center">2024 copyright all reserved-primrose</h1>
    </div>
    </div>
  );
};

export default Footer;


