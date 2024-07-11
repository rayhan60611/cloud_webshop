// import React from "react";
import ProductCategory from "./ProductCategory";

const AllProducts = () => {
  return (
    <div className=" flex">
      <div className="basis-2/12">
        <ProductCategory />
      </div>
      <div className="basis-5/6">all product display</div>
    </div>
  );
};

export default AllProducts;
