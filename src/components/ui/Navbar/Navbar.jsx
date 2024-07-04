// import React from "react";
// import Styles from "./Navbar.module.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row gap-8 md:justify-center content-center  bg-black p-2 text-white duration-500 md:items-start relative ">
      <div onClick={() => setOpen(!open)} className="md:hidden z-10 ">
        {open ? (
          <XMarkIcon className="h-8 w-8 font-bold text-white duration-700 animate-spin"></XMarkIcon>
        ) : (
          <Bars3Icon className="h-8 w-8 font-bold text-white  duration-700 hover:rotate-"></Bars3Icon>
        )}
      </div>

      <nav
        className={`absolute md:static flex flex-col md:flex-row gap-8 justify-center bg-black text-white duration-500 items-center w-full pb-6 md:py-2  ${
          !open ? "-top-[30rem] left-0 " : "top-12 left-0 "
        }`}
      >
        <a href="/">
          <img
            className="w-12 mt-6 sm:mt-0 hover:skew-y-12 duration-500"
            src="/public/logtech-white.png"
            alt="lowtech gmbh logo"
          />
        </a>

        <a
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 duration-500 hover:rotate-105   text-center"
          href="/"
        >
          Home
        </a>
        <a
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 duration-500 hover:scale-105"
          href="/service"
        >
          Service
        </a>
        <a
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 duration-500 hover:scale-105"
          href="/contact-us"
        >
          Contact Us
        </a>
        <a
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 duration-500 hover:scale-105"
          href="/about-us"
        >
          About Us
        </a>
        <button className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 px-4 duration-500 hover:scale-105 border-white border-[1px]">
          Try Now!
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
