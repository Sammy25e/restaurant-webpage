import { CiMenuBurger } from "react-icons/ci";

import logoimg from "../assets/assets/food-logo.png";
import { useState } from "react";
const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl w-full mx-auto h-[70px] px-4 md:px-6 flex items-center justify-between">
        <div className="flex gap-1">
          <img src={logoimg} alt="" className="w-6 h-6 object-cover" />
          <h2>Foodie</h2>
        </div>

        <div className=" flex flex-col  flex-row items-center justify-center gap-5">
          <ul className=" hidden md:flex items-center gap-4 text-sm font-medium">
            <li className="hover:text-amber-300">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-amber-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-amber-300">
              <a href="#contact">Contact</a>
            </li>
            <button className="  bg-amber-400 text-white px-4 py-1.5 rounded-full">
              order
            </button>
          </ul>

          <button>
            <CiMenuBurger className=" flex md:hidden " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
