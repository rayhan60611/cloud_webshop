import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

const FinalConfirmation = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center container  gap-6">
      <h1 className="text-2xl font-bold">Thank You for your Purchase...</h1>
      <Link to="/">
        <Button>Shop More</Button>
      </Link>
    </div>
  );
};

export default FinalConfirmation;
