import { useState, useEffect, useContext } from "react";
import { ProductCartContext } from "../allProducts/ProductCartProvider";
// Update the import path based on your project structure

const useCart = () => {
  const { productCart } = useContext(ProductCartContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const totalCartItemCountKeys = Object.keys(productCart);

  // Total item count
  const totalCartItemCount = Object.values(productCart).reduce(
    (previous, current) => current + previous,
    0
  );

  const filterData = data.filter((p) => productCart[p._id]);

  // Calculation for subtotal
  const subtotal = filterData.reduce(
    (previous, current) => current.price * productCart[current._id] + previous,
    0
  );

  const shippingFee = 5;
  const taxFee = subtotal * 0.19;
  const totalPrice = subtotal + shippingFee + taxFee;

  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:5000/products/find-by-ids",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ids: totalCartItemCountKeys,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return {
    filterData,
    error,
    loading,
    totalCartItemCount,
    subtotal,
    shippingFee,
    taxFee,
    totalPrice,
  };
};

export default useCart;
