// import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ProductCategory from "./ProductCategory";
import { LoaderPinwheel } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";
import { useContext, useEffect, useState } from "react";
import { ProductCartContext } from "./ProductCartProvider";
import { addToCart, getShoppingCart } from "../utility/localStorage";

const AllProducts = () => {
  const products = useLoaderData();
  const navigation = useNavigation();
  const {
    // products: cart,
    // setProducts: setCartProducts,
    // mainCart,
    // setMainCart,
    setProductsCart,
  } = useContext(ProductCartContext);

  //getting data from localStorage and seting it to  SetCart State
  // useEffect(() => {
  //   const shoppingCart = getShoppingCart();
  //   const savedCart = [];
  //   // step 1: get id of the added product
  //   for (const id in shoppingCart) {
  //     // step 2: get product from products stateby using id
  //     const addedProduct = products.find((product) => product._id == id);

  //     if (addedProduct) {
  //       // step 3: add quantity
  //       const quantity = shoppingCart[id];
  //       addedProduct.quantity = quantity;

  //       // step 4: add the addedCart to the save cart
  //       savedCart.push(addedProduct);
  //     }
  //   }
  //   // step 5: set the cart
  //   console.log(savedCart);
  //   setMainCart(savedCart);
  // }, [products, setMainCart]);

  // console.log(mainCart);
  //add to cart product
  const handleAddToCart = (product) => {
    setProductsCart((prev) => {
      const quantity = prev[product._id];
      if (!quantity) {
        prev[product._id] = 1;
      } else {
        const newQuantity = quantity + 1;
        prev[product._id] = newQuantity;
      }
      // prev.push(product);
      return { ...prev };
    });
    // setCartProducts?.setCart(product);

    // let newCart = [];
    // const exists = cart.find((pd) => pd.id === product._id);
    // if (!exists) {
    //   product.quantity = 1;
    //   newCart = [...cart, product];
    // } else {
    //   exists.quantity = exists.quantity + 1;
    //   const remaining = cart.filter((pd) => pd.id != product._id);
    //   newCart = [...remaining, exists];
    // }
    // // setCart(newCart);
    // setCartProducts(newCart);
  };

  let content;
  if (navigation.state === "loading") {
    content = (
      <div className="flex flex-1 justify-center items-center">
        <LoaderPinwheel className="animate-spin size-20 duration-1000" />
      </div>
    );
  } else if (!products || products.length === 0) {
    content = <NoProductAvailable />;
  } else {
    content = (
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 md:gap-10 ">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></ProductCard>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col xl:flex-row my-6 gap-10 md:gap-4 px-4 md:items-stretch ">
      {/* Product category */}

      <ProductCategory />

      {/* All products */}
      {content}
    </div>
  );
};

export default AllProducts;
