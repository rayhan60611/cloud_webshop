// import React from "react";

import { Link } from "react-router-dom";
import NotFound404Image from "/404.svg";

const NotFoundPage = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center text-white ">
      <div className="-z-50 absolute opacity-10 h-full w-full">
        <img
          className="absolute top-0 left-0 w-52"
          src="/public/sc_logo.png"
          alt=""
        />
        <img
          className=" absolute bottom-0 right-0 w-52"
          src="/public/sc_logo.png"
          alt=""
        />
      </div>

      <img
        src={NotFound404Image}
        className="w-[600px] bg-blend-multiply"
        alt=""
      />
      <Link className="btn btn-neutral z-10" to="/">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
