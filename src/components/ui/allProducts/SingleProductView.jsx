import { Loader, LoaderPinwheel } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../button";
import { ProductCartContext } from "./ProductCartProvider";
import { Bounce, toast } from "react-toastify";

const SingleProductView = () => {
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(true);
  const [isFinish, setIsFinish] = useState(false);
  const { id } = useParams();
  const { setProductsCart } = useContext(ProductCartContext);

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
        <Button
          onClick={() => {
            handleAddToCart(product);
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default SingleProductView;
