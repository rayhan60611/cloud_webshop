// import React from "react";
// import Styles from "./Navbar.module.css";
import { AuthContext } from "@/providers/AuthProviders";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Button } from "../button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, handleLogout } = useContext(AuthContext);
  const fullname = user?.displayName.split(" ");

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
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            className="w-12 mt-6 sm:mt-0 hover:skew-y-12 duration-500 "
            src="/public/logtech-white.png"
            alt="lowtech gmbh logo"
          />
        </Link>

        <Link
          onClick={() => setOpen(false)}
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 duration-500 hover:rotate-105   text-center"
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setOpen(false)}
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 duration-500 hover:scale-105"
          to="/addProduct"
        >
          Add Product
        </Link>
        <Link
          onClick={() => setOpen(false)}
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 duration-500 hover:scale-105"
          to="/"
        >
          Products
        </Link>
        <Link
          className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 duration-500 hover:scale-105"
          to="/about-us"
        >
          About Us
        </Link>
        <button className="font-semibold text-2xl md:text-[16px] rounded hover:bg-white hover:text-black  p-2 px-4 duration-500 hover:scale-105 border-white border-[1px]">
          Buy Now!
        </button>
        {user ? (
          <div className="group relative z-20">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full w-10 h-10"
                >
                  <img
                    className="w-10 h-10 rounded-full border-green-600 "
                    src={user.photoURL}
                    alt=""
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Hello, {fullname ? fullname[fullname.length - 1] : " "}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link
            className="bg-white text-black p-2 font-semibold hover:bg-green-500 duration-500"
            to="/login"
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
