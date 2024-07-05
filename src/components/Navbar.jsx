import React from "react";
import logo from "../assets/img/logo.png";
import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <section className="">
      <header className="fixed w-full top-0 left-0 right-0">
        <nav className="flex justify-between items-center px-16 py-8 ">
          <a href="" className="text-white">
            <img src={logo} alt="" width={100} height={100} />
          </a>
          <ul className="flex justify-center items-center  ">
            {navLinks.map((item) => {
              return (
                <li>
                  <a
                    href={item.url}
                    className="text-white font-semibold hover:border-b hover:border-primary rounded-xl px-4 py-1"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}

            <li>
              <a
                href=""
                className="text-white text-2xl bg-primary rounded-full px-4 py-2 font-raleway"
              >
                Register
              </a>
            </li>
          </ul>

          {/* <div>
                <h1 className="text-white">social icons</h1>
            </div> */}
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
