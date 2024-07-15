import { Loader, LoaderPinwheel } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductView = () => {
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(true);
  const [isFinish, setIsFinish] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsFinish(true);
      })
      .catch((error) => {
        setProduct(null);
        setIsFinish(true);
      });
  }, [id]);
  useEffect(() => {
    if (isFinish) {
      const timer = setTimeout(() => {
        setLoader(false);
        setIsFinish(false);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isFinish]);

  if (loader)
    return (
      <div className="flex flex-1 justify-center items-center">
        <LoaderPinwheel className="animate-spin size-20 duration-1000" />
      </div>
    );
  return (
    <div className="flex-1">
      <h1>{product?.name}</h1>
    </div>
  );
};

export default SingleProductView;
