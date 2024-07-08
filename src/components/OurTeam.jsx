import React from "react";
import { trainerTeam } from "../constants";

const OurTeam = () => {
  return (
    <div className="bg-black-2 px-4 lg:px-16 xl:px-48 py-16">
      <div className="flex justify-between max-sm:flex-col items-end max-sm:items-start ">
        <div>
          <h1 className="text-primary text-2xl">Our Team</h1>
          <h1 className="text-4xl uppercase text-white">TRAIN WITH EXPERTS</h1>
        </div>
        <button className="border border-primary text-primary uppercase px-8 py-2">
          Appointment
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 place-content-between max-sm:place-items-start py-8">
        {trainerTeam.map((img, index) => (
          <div key={index}>
            <img src={img} alt="" className="" />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="w-[25px] h-[7px]  bg-black-5 -skew-y-12"></div>
        <div className="w-[25px] h-[7px]  bg-black-5 -skew-y-12"></div>
        <div className="w-[25px] h-[7px]  bg-black-5 -skew-y-12"></div>

      </div>
    </div>
  );
};

export default OurTeam;
