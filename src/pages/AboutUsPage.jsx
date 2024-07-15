import React from "react";
import SharedBanner from "../components/SharedBanner";
import ChoosUs from "../components/ChoosUs";
import aboutUsImg from "../assets/img/about-us.jpg";
import playIcon from "../assets/img/play.svg";
import OurTeam from "../components/OurTeam";
const AboutUsPage = () => {
  return (
    <div>
      <SharedBanner title="About Us" />
      <ChoosUs />
      <div className="bg-black-1 flex justify-between max-lg:flex-col  ">
        <div className="relative flex-1">
          <img src={aboutUsImg} alt="" className="w-full object-contain h-full " />
          {/* <div className="absolute top-1/2 w-full flex justify-center items-center "> */}
            <div className="bg-primary p-8  rounded-full top-[40%] left-[40%]  absolute  ">
              <img src={playIcon} alt="" />
            {/* </div> */}
          </div>
        </div>
        <div className=" flex-1 px-8 pt-4 space-y-4 max-lg:px-16">
          <h1 className="text-white">About us</h1>
          <h1 className="text-white text-4xl">WHAT WE HAVE DONE</h1>
          <p className="text-black-text font-raleway">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between">
                <h1 className="text-white">Title</h1>
                <h1 className="text-white">80%</h1>
              </div>

              <div className=" bg-black-text py-[2.6px] relative">
                <div className="bg-white absolute top-0 w-[80%] py-[2.6px]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <h1 className="text-white">Body Building</h1>
                <h1 className="text-white">95%</h1>
              </div>

              <div className=" bg-black-text py-[2.6px] relative">
                <div className="bg-white absolute top-0 w-[95%] py-[2.6px]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <h1 className="text-white">Fitnes</h1>
                <h1 className="text-white">75%</h1>
              </div>

              <div className=" bg-black-text py-[2.6px] relative">
                <div className="bg-white absolute top-0 w-[75%] py-[2.6px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurTeam/>
    </div>
  );
};

export default AboutUsPage;
