// import React from "react";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import ProductCategory from "./ProductCategory";
import { LoaderPinwheel } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";
import { useContext, useEffect, useState } from "react";
import { ProductCartContext } from "./ProductCartProvider";
import { addToCart, getShoppingCart } from "../utility/localStorage";
import Fuse from "fuse.js";
import { Button } from "../button";
import { Bounce, toast } from "react-toastify";

const AllProducts = () => {
  const products = useLoaderData();
  const navigation = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("q");
  const decodedSearchValue = searchValue
    ? decodeURIComponent(searchValue)
    : null;
  const categoryValue = searchParams.get("c");
  const decodedCategoryValue = categoryValue
    ? decodeURIComponent(categoryValue)
    : null;

  const { setProductsCart } = useContext(ProductCartContext);

  let count = 0;
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
      if (quantity >= product.stock) {
        toast.warn(`Product is out of Stock!!!`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return prev;
      }
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
      <div className="flex flex-1 justify-center items-center ">
        <LoaderPinwheel className="animate-spin size-20 duration-1000" />
      </div>
    );
  } else if (!products || products.length === 0) {
    content = <NoProductAvailable />;
  } else {
    const fuse = new Fuse(products, {
      threshold: 0.3,
      keys: ["name", "price", "category"],
    });

    const fuseResult = fuse.search(decodedSearchValue ?? "");
    // console.log(decodedSearchValue);
    // console.log(fuseResult);
    const finalSearchResult = fuseResult.map((item) => item.item);

    let result = decodedSearchValue ? finalSearchResult : products;
    if (decodedCategoryValue) {
      result = result.filter(
        (item) =>
          item.category.toLowerCase() === decodedCategoryValue.toLowerCase()
      );
    }
    count = result.length;
    content = result.length ? (
      <div className="flex-1 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5 md:gap-5 ">
        {result.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></ProductCard>
        ))}
      </div>
    ) : (
      <div className="min-h-40 flex justify-center items-center ">
        <span className="">No Product Found</span>
      </div>
    );
  }

  return (
    <div className="container flex-1">
      <div className="flex flex-col gap-2 justify-center items-center my-10">
        <h1 className="text-base md:text-xl font-bold">
          All Products <span>{count}</span>
        </h1>
        <hr className="border-2 text-lime-600 w-full" />
      </div>
      <div className="flex flex-1 flex-col xl:flex-row my-6 gap-10 md:gap-4 px-4 md:items-stretch ">
        {/* Product category */}

        <ProductCategory />

        {/* All products */}
        {content}
      </div>
    </div>
  );
};

export default AllProducts;
