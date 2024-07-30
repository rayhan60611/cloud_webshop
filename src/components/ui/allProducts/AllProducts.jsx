// import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ProductCategory from "./ProductCategory";
import ProductCart from "./ProductCart";
import { LoaderPinwheel } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";

const AllProducts = () => {
  const products = useLoaderData();
  const navigation = useNavigation();
  console.log(navigation.state);

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
          <ProductCart key={product._id} product={product} />
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
