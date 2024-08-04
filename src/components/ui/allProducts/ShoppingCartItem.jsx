// import React from "react";
import { useContext } from "react";
import { Button } from "../button";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { ProductCartContext } from "./ProductCartProvider";

const ShoppingCartItem = ({ product }) => {
  const { productCart, setProductsCart } = useContext(ProductCartContext);

  const findItem = productCart[product._id];

  const handleRemove = () => {
    setProductsCart((prev) => {
      delete prev[product._id];
      // prev.push(product);
      return { ...prev };
    });
  };

  const increment = () => {
    setProductsCart((prev) => {
      const quantity = prev[product._id];
      if (!quantity) {
        prev[product._id] = 1;
      } else {
        const newQuantity = quantity + 1;
        prev[product._id] = newQuantity;
      }
      // prev.push(product);
      return { ...prev };
    });
  };

  const decrement = () => {
    setProductsCart((prev) => {
      const quantity = prev[product._id];
      if (quantity > 1) {
        prev[product._id] -= 1;
      }
      // prev.push(product);
      return { ...prev };
    });
  };
  //   console.log(findItem);
  return (
    <div className="flex items-center gap-4 p-4 bg-muted rounded-lg select-none">
      <img
        src={product.image}
        alt="Product Image"
        className="rounded-md  h-20 w-20 object-contain"
      />
      <div className="flex-1 grid gap-2">
        <h3 className="font-semibold line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              disabled={findItem <= 1}
              onClick={decrement}
              variant="outline"
              size="icon"
              className="h-8 w-8"
            >
              <MinusIcon className="h-4 w-4" />
            </Button>
            <span className="text-lg font-medium">{findItem}</span>
            <Button
              onClick={increment}
              variant="outline"
              size="icon"
              className="h-8 w-8"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
          <Button
            variant="destructive"
            size="icon"
            className="h-8 w-8 ml-auto"
            onClick={handleRemove}
          >
            <TrashIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
