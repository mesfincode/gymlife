import React from "react";
import logo from '../assets/img/logo.png'
const Navbar = () => {
  return (
    <section>
      <header className="fixed w-full top-0 left-0 right-0">
        <nav className="flex justify-between items-center px-24 py-4 bg-black opacity-60">
            <a href="" className="text-white">
                <img src={logo} alt="" width={100} height={100}/>
            </a>
            <ul className="flex justify-center items-center gap-4 ">
                <li><a href="" className="text-white text-2xl hover:border-b hover:border-primary rounded-lg px-4 py-1">Home</a></li>
                <li><a href="" className="text-white text-2xl hover:border-b hover:border-primary  rounded-lg px-4 py-1">About</a></li>
                <li><a href="" className="text-white text-2xl hover:border-b hover:border-primary  rounded-lg px-4 py-1">Contact</a></li>
                <li><a href="" className="text-white text-2xl bg-primary rounded-full px-4 py-1">Register</a></li>

            </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
