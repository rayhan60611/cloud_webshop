import { createContext, useEffect, useState } from "react";
import { addToCartNew, getShoppingCart } from "../utility/localStorage";

// product context api
export const ProductCartContext = createContext();

const ProductCartProvider = ({ children }) => {
  // const [products, setProducts] = useState([]);
  // const [mainCart, setMainCart] = useState([]);
  const [productCart, setProductsCart] = useState(getShoppingCart);
  useEffect(() => {
    addToCartNew(productCart);
  }, [productCart]);

  const productInfo = {
    // products,
    // setProducts,
    // mainCart,
    // setMainCart,
    productCart,
    setProductsCart,
  };
  return (
    <ProductCartContext.Provider value={productInfo}>
      {children}
    </ProductCartContext.Provider>
  );
};

export default ProductCartProvider;
