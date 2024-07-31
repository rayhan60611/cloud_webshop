import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <div className="container my-8">
      {/* top part */}
      <div className="flex flex-col gap-2 justify-center items-center my-4">
        <h1 className="text-base md:text-xl font-bold">Shopping Cart</h1>
        <hr className="border-2 text-lime-600 w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* left part */}
        <div className="flex flex-col gap-8">
          <div className="bg-lime-600 p-12">Items 2</div>
          <div className="bg-lime-600 p-12">Items 3</div>
          <div className="bg-lime-600 p-12">Items 1</div>
          <div className="bg-lime-600 p-12">Items 4</div>
          <div className="bg-lime-600 p-12">Items 5</div>
        </div>

        {/* right part */}
        <div className="">
          <div className="max-w-sm  h-auto mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order summary</h2>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>€ 99.00</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span className="flex items-center">
                  Shipping estimate
                  <span className="ml-1"></span>
                </span>
                <span>€ 5.00</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span className="flex items-center">
                  Tax estimate
                  <span className="ml-1"></span>
                </span>
                <span>€ 8.32</span>
              </div>
              <div className="flex justify-between text-gray-700 font-semibold pt-4 border-t border-gray-200 mt-4">
                <span>Order total</span>
                <span>€ 112.32</span>
              </div>
            </div>
            <Link to="#">
              <Button className="w-full p-6 rounded-lg mt-6 ">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
