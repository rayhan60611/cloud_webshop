// import React from "react";

import { CircleChevronRight } from "lucide-react";
import { Button } from "../button";

const ProductCart = ({ product }) => {
  const { name, image, category, stock, price, description } = product;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 duration-500 hover:shadow-2xl">
        <img
          className="w-full"
          src="/public/CAROUSEL_1.jpg"
          alt="Sunset in the mountains"
        ></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p>
            <span>€</span> price
          </p>
          <Button className="flex gap-2">
            View More <CircleChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
