import React from "react";
import { plans } from "../constants";

const OurPlan = () => {
  return (
    <section className="bg-black-1 flex justify-center items-center flex-col w-full space-y-8 py-16 ">
      <h1 className="text-primary text-2xl">Our Plan</h1>
      <h1 className="text-4xl text-white font-bold text-center">
        CHOOSE YOUR PRICING PLAN
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto w-full gap-8  xl:px-48  ">
        {plans.map((item, index) => {
          const featurs = item.features;
          return (
            <div key={index} className="border border-black-4 flex flex-col justify-center items-center py-16   px-16 -skew-y-6 space-y-4 ">
              <h1 className="text-white  skew-y-6 text-2xl font-semibold">{item.title}</h1>
              <p className="text-primary text-6xl font-bold skew-y-6 flex justify-center items-center">
                ${item.price.toString()}.0
              </p>
              <h2 className="text-white text-lg skew-y-6">{item.subtitle}</h2>
              <div className="skew-y-6 ">
                {featurs.map((featur, index) => (
                  <div className="flex justify-center items-center">
                    <p className="text-black-text font-raleway">{featur}</p>
                  </div>
                ))}
              </div>
              <button className="bg-black-4 text-white skew-y-6 px-16 py-2 uppercase text-lg">Enroll Now</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurPlan;
