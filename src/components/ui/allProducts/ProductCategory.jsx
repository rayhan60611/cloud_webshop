// import React from "react";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch("http://localhost:5000/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  const categoryHandler = (category) => {};
  // console.log(categories);
  return (
    <div className="flex flex-col gap-3 rounded-sm px-2 border-[2px] border-dotted max-h-[300px] overflow-auto py-4 basis-2/12 md:max-h-[inherit]">
      <h1 className="text-sm text-center font-semibold w-full">
        Select Category
      </h1>
      {categories.map((category) => (
        <button
          onClick={categoryHandler}
          key={category}
          className=" bg-black text-white text-sm md:text-xs rounded-md px-6 py-2 hover:bg-lime-600 duration-500 hover:shadow-2xl w-full "
        >
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default ProductCategory;
