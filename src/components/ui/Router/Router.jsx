// import React from "react";
import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import AllProducts from "../allProducts/AllProducts";
import Login from "../login/Login";
import Home from "../home/Home";
import AddProduct from "../allProducts/AddProduct";
import UpdateProduct from "../allProducts/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allProduct",
        element: <AllProducts />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/updateProduct",
        element: <UpdateProduct />,
      },
    ],
  },
]);

export default router;
