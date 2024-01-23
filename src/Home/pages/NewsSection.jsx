import React, { useEffect, useState } from "react";

const NewsSection = () => {
  const [news, setNews] = useState();
  console.log(news);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className=" container mx-auto ">
      <div className="mt-28 gap-5 grid grid-cols-2 justify-between">
        <div className="w-full h-full">
          <h1 className="text-4xl mb-20 font-bold">Our Blog News</h1>
          <div className="h-5/6 w-full">
            <img
              className="object-cover shadow-2xl h-full w-full bg-no-repeat "
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        <div className="mt-28">
          <h1 className="text-3xl  font-bold text-[#0e9ce6]">
            Recommended Blog
          </h1>
          {news?.map((newer, index) => (
            <div key={index} className="flex justify-center items-center gap-5">
              <img
                className="  w-1/6 object-cover rounded-lg "
                src={newer.image}
                alt=""
              />
              <div className="">
                <h1 className="text-2xl mt-12  w-[45%] font-semibold">{newer.title}</h1>
                <p className=" text-xl w-[75%] mt-2 opacity-65">{newer.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default NewsSection;
