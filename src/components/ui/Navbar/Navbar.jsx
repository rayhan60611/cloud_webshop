// import React from "react";
// import Styles from "./Navbar.module.css";
import { AuthContext } from "@/providers/AuthProviders";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <div className="flex flex-col md:flex-row gap-8 md:justify-center content-center  bg-black p-2 text-white duration-500 md:items-start relative z-50">
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
            className="w-12 mt-6 sm:mt-0 hover:skew-y-12 duration-500 "
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
          href="/"
        >
          Products
        </a>
        <a
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 duration-500 hover:scale-105"
          href="/about-us"
        >
          About Us
        </a>
        <button className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 px-4 duration-500 hover:scale-105 border-white border-[1px]">
          Buy Now!
        </button>
        {user && (
          <div className="group relative">
            <img
              className="w-10 rounded-full border-[2px] border-green-600"
              src={user.photoURL}
              alt=""
            />
            <div className="hidden group-hover:block absolute  w-auto">
              <div className="flex flex-col justify-center items-center w-auto">
                <p className="text-sm text-center  bg-green-600 font-semibold w-auto">
                  Hello, {user.displayName}
                </p>
                <button
                  onClick={handleLogout}
                  className=" text-red hover:before:bg-redborder-red-500 relative h-[35px] w-auto overflow-hidden border border-red-500 bg-white px-2 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
                >
                  <span className="relative z-10">Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
