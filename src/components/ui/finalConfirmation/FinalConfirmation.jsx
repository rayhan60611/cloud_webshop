import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

const FinalConfirmation = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center container  gap-6">
      <img className="w-20 h-20" src="/logtech-black.png" alt="" />
      <h1 className="text-2xl font-bold">Thank You for your Purchase...</h1>
      <h2 className="text-xs animate-bounce text-lime-600">Check your Email</h2>
      <Link to="/">
        <Button>Shop More</Button>
      </Link>
    </div>
  );
};

export default FinalConfirmation;
