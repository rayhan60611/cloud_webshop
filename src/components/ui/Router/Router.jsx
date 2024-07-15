// import React from "react";
import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import AllProducts from "../allProducts/AllProducts";
import Login from "../login/Login";
import Home from "../home/Home";
import AddProduct from "../allProducts/AddProduct";
import UpdateProduct from "../allProducts/UpdateProduct";
import SingleProductView from "../allProducts/SingleProductView";

async function fetchAllProduct() {
  const result = await fetch("http://localhost:5000/products");
  return result;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: fetchAllProduct,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allProduct",
        element: <AllProducts />,
        loader: fetchAllProduct,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/updateProduct",
        element: <UpdateProduct />,
      },
      {
        path: "/products/:id",
        element: <SingleProductView />,
      },
    ],
  },
]);

export default router;
