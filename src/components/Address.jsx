import React from "react";
import { address } from "../constants";

const Address = () => {
  return (
    <div className="bg-black-3 px-4 lg:px-16 xl:px-48 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4 place-content-between max-sm:place-items-start py-8">
        {address.map((item, index) => (
          <div key={index} className="flex justify-start items-center gap-4">
            <div className=" bg-primary flex justify-center items-center w-[60px] h-[60px] rounded-full">
              <img src={item.icon} alt={item.label} />
            </div>
            <h1 className="font-raleway text-white max-w-[250px]">{item.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
