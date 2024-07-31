// import React from "react";

import { CircleChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "../button";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  const { name, image, category, stock, price, description, _id } = product;
  return (
    <div className="max-w-sm flex flex-col justify-evenly rounded overflow-hidden shadow-lg hover:scale-105 duration-500 hover:shadow-2xl pb-4">
      <div className="flex-1">
        <img
          className="w-full aspect-square"
          src={image}
          alt="Sunset in the mountains"
        ></img>
      </div>
      <div className="flex-1 px-6 py-4 flex flex-col gap-2">
        <div className="font-bold text-sm lg:text-base mb-2">
          {name.toUpperCase()}
        </div>
        <p className="text-gray-700 text-xs md:text-sm line-clamp-3">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-col gap-2">
        <p>
          <span>€</span> {price}
        </p>
        <div className="flex justify-between gap-4">
          <Button className="flex justify-center gap-1 w-fit" asChild>
            <Link to={`/products/${_id}`}>
              View More <CircleChevronRight />
            </Link>
          </Button>
          <Button
            className="flex justify-center gap-1 w-fit bg-lime-600 hover:text-black hover:bg-lime-500"
            asChild
          >
            <Link to={`/products/${_id}`}>
              Add to Cart <ShoppingCart />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
