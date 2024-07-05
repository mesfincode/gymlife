import React from "react";
import { classes } from "../constants";

const Classes = () => {
  return (
    <section className="bg-black-2 flex justify-center items-center flex-col gap-2 zi-10 z-50 px-4 xl:px-48  space-y-4 py-16">
      <div className=" flex justify-center items-center flex-col">
        <h1 className="text-primary text-2xl">Our classes</h1>
        <h1 className="text-4xl text-white font-bold text-center">What we can offer</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 zi-10 md:grid-cols-2 lg:grid-cols-3 ">
        {classes.map((item) => (
          <div className="   zi-10 overflow-hidden">
            <img
              src={item.img}
              alt=""
              className=" w-full  object-fillr zi-10"
            />
            {/* <div class="absolute  -left-5 -top-44 h-100 w-600 border-t-4 border-[#464646] bg-[#0a0a0a] content-[''] -rotate-5 -z-1">
              <h1 className="text-primary">{item.catagory}</h1>
              <h1 className="text-white">{item.title}</h1>
            </div> */}
            <div className=" h-[100px] relative   ci-text bg-black-1 w-full zi-10 pl-8 py-2 ">
              <h1 className="text-primary">{item.catagory}</h1>
              <h1 className="text-white">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
