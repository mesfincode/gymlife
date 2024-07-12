import React from "react";
import logo from "../assets/img/logo.png";
import { socialIcons } from "../constants";
const Footer = () => {
  return (
    <div className="bg-black-1 px-4 lg:px-16 xl:px-48 py-8">
      <div className="bg-black-1 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 xl:grid-cols-4 place-content-between max-sm:place-items-start py-8">
        <div>
          <img src={logo} alt="" />
          <p className="text-black-text font-raleway">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua endisse
            ultrices gravida lorem.
          </p>
          <div className="flex gap-4 ">
            {socialIcons.map((item, index) => (
              <div className="bg-primary rounded-lg p-2 ">
                <img src={item.icon} alt={item.label} className="" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-white text-2xl">Useful links</h1>
          <div className="flex flex-col gap-2">
            <a href="" className="text-white font-raleway">
              About
            </a>
            <a href="" className="text-white font-raleway">
              Blog
            </a>
            <a href="" className="text-white font-raleway">
              Classes
            </a>
            <a href="" className="text-white font-raleway">
              Contact
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-white text-2xl">Support</h1>
          <div className="flex flex-col gap-2">
            <a href="" className="text-white font-raleway">
              Login
            </a>
            <a href="" className="text-white font-raleway">
              My account
            </a>
            <a href="" className="text-white font-raleway">
              Subscribe
            </a>
            <a href="" className="text-white font-raleway">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-2xl text-white">Tips $ Guides</h1>
          <div>
            <h1 className="text-white  text-2sm">
              Physical fitness may help prevent depression, anxiety
            </h1>
            <h1 className="text-black-text font-raleway">3 min read | 20 comment</h1>
          </div>
          <div className="w-full h-[3px] bg-black-4"></div>
          <div>
            <h1 className="text-2sm text-white">
              Fitness: The best exercise to lose belly fat and tone up...
            </h1>
            <h1 className="text-black-text font-raleway">3 min read | 20 Comment</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[3px] border-b-2 border-black-4"></div>
      <h1 className=" text-black-text font-raleway text-center pt-8">
        Copyright ©2024 All rights reserved | this is react template
      </h1>
    </div>
  );
};

export default Footer;
