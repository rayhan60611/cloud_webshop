// import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCategory from "./ProductCategory";
import ProductCart from "./ProductCart";

const AllProducts = () => {
  const products = useLoaderData();
  return (
    <div className="flex flex-col md:flex-row my-6 gap-4 px-4">
      {/* product category */}
      <div className="basis-2/12">
        <ProductCategory />
      </div>
      {/* all product */}
      <div className="flex-1 flex flex-wrap gap-4 ">
        {products?.map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
