import { Loader, LoaderPinwheel } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../button";

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
    <div className="flex-1 container my-8">
      <div className="flex flex-col  shadow-2xl items-center gap-4 p-8 rounded-xl">
        <img className="w-2/4" src={product?.image} alt="" />
        <h1 className="text-xl uppercase font-bold">{product?.name}</h1>
        <p className="text-xs text-justify text-slate-500">
          {product?.description}
        </p>
        <h1>
          <span className="text-xl font-bold">
            Price
            <span>
              {" "}
              :{" "}
              <span>
                {product?.price}
                <sup>.00</sup>
              </span>{" "}
              €
            </span>
          </span>
        </h1>
        <h2>
          <span className="text-sm text-green-600">
            In Stock <span>{product?.stock}</span>
          </span>
        </h2>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default SingleProductView;
