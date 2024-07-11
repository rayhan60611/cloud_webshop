// import React from "react";
import ProductCategory from "./ProductCategory";

const AllProducts = () => {
  return (
    <div className="flex my-6">
      <div className="basis-2/12">
        <ProductCategory />
      </div>
      <div className="basis-5/6">All product display</div>
    </div>
  );
};

export default AllProducts;
