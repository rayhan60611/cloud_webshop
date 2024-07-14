// import React from "react";

import { useEffect, useState } from "react";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col justify-evenly items-start  min-h-[500px] px-2 border-2 ">
      <h1 className="text-sm text-center font-semibold w-full">
        Select Category
      </h1>
      {categories.map((category) => (
        <button
          key={category._id}
          className=" bg-black text-white px-6 py-2 hover:bg-green-600 duration-500 hover:shadow-2xl w-full "
        >
          {category.category}
        </button>
      ))}
    </div>
  );
};

export default ProductCategory;
