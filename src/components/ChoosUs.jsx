import React from "react";
import { chooseUs } from "../constants";
import image from "../assets/img/gym-equipment.png";
const ChoosUs = () => {
  return (
    <section className="bg-black-1 flex justify-center items-center flex-col w-full space-y-8 py-16 ">
      <h1 className="text-primary">WHY CHOSE US?</h1>
      <h1 className="text-4xl text-white font-bold">PUSH YOUR LIMITS FORWARD</h1>
     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-4 xl:px-48">
     {chooseUs.map((item, index) => (
        <div key={index} className="flex justify-center items-center flex-col space-y-4 cursor-pointer ">
          <div className="bg-black-2 rounded-full w-[100px] h-[100px] flex justify-center items-center hover:bg-white">
          <img src={`${item.icon}`} alt="" width={50} height={50} />
          </div>
          <h1 className="text-white text-center">{item.title}</h1>
          <p className="text-black-text max-w-[300px] text-center font-raleway">{item.description}</p>
        </div>
      ))}
     </div>
    </section>
  );
};

export default ChoosUs;
