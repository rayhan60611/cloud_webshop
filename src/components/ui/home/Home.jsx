// import React from "react";
import AllProducts from "../allProducts/AllProducts";
import DemoCarousel from "../homePage/DemoCarousel";

const Home = () => {
  return (
    <div>
      <DemoCarousel />
      <div className="flex flex-col gap-10 container">
        <div className="flex flex-col items-center gap-2 ">
          <h1 className="text-center text-2xl font-bold">All Products</h1>
          <hr className="w-2/5 border-2" />
        </div>

        <AllProducts />
      </div>
    </div>
  );
};

export default Home;
