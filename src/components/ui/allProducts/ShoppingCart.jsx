import React, { useContext, useEffect, useState } from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { ProductCartContext } from "./ProductCartProvider";
import ShoppingCartItem from "./ShoppingCartItem";
import useCart from "../hooks/useCart";
import { BsCart4 } from "react-icons/bs";

const ShoppingCart = () => {
  const {
    filterData,
    error,
    loading,
    totalCartItemCount,
    subtotal,
    shippingFee,
    taxFee,
    totalPrice,
  } = useCart();

  return (
    <div className="container my-8 flex-1 flex flex-col justify-center">
      {/* top part */}
      <div className="flex flex-col gap-2 justify-center items-center my-10">
        <h1 className="text-base md:text-xl font-bold">Shopping Cart</h1>
        <hr className="border-2 text-lime-600 w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 h-screen ">
        {/* left part */}
        {filterData.length ? (
          <div className="flex flex-col gap-8 scroll-auto overflow-scroll">
            {filterData.map((product) => {
              return <ShoppingCartItem key={product._id} product={product} />;
            })}
          </div>
        ) : (
          <div className="flex flex-col justify-start items-center mt-28">
            <div className="text-2xl font-bold">
              No product available in cart
            </div>
            <BsCart4 className="w-10 h-10" />
          </div>
        )}

        {/* right part */}
        <div className="">
          <div className="max-w-sm  h-auto mx-auto bg-white shadow-md rounded-lg p-6 ">
            <h2 className="text-xl font-semibold mb-4">Order summary</h2>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Total Product</span>
                <span>{totalCartItemCount}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>€ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span className="flex items-center">
                  Shipping estimate
                  <span className="ml-1"></span>
                </span>
                <span>€ {totalCartItemCount ? shippingFee : 0}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span className="flex items-center">
                  Tax estimate 19%
                  <span className="ml-1"></span>
                </span>
                <span>€ {taxFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 font-semibold pt-4 border-t border-gray-200 mt-4">
                <span>Order total</span>
                <span>€ {totalCartItemCount ? totalPrice.toFixed(2) : 0}</span>
              </div>
            </div>
            <Link to="/checkout">
              <Button className="w-full p-6 rounded-lg mt-6 ">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
