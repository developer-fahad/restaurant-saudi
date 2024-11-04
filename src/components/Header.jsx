import React, { useState } from "react";
import logo from "../assets/Frame.png";
import Button from "./Button";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="fixed h-24 w-full z-[100]">
      <div className="flex h-full xl:max-w-[1180px] px-4 xl:px-0 mx-auto items-center justify-between py-5">
        <div className="flex items-center gap-1 text-white">
          <img className="w-7 h-7" src={logo} alt="" />
          <h2 className="font-poppins text-3xl">
            <span className="font-semibold text-3xl">Restau</span>rant
          </h2>
        </div>
        <div className="text-white hidden lg:block">
          <ul className="flex items-center gap-8 font-raleway font-medium text-[15px]">
            <li className="">
              <a href="">Home</a>
            </li>
            <li className="">
              <a href="">About</a>
            </li>
            <li className="">
              <a href="">Portfolio</a>
            </li>
            <li className="">
              <a href="">Clients</a>
            </li>
            <li className="">
              <a href="">Blog</a>
            </li>
            <li className="">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Button text={"Book a table"} />
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white lg:hidden focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Mobile Menu */}
        
      </div>
    </div>
  );
};

export default Header;
