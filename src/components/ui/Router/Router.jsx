// import React from "react";
import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import AllProducts from "../allProducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
    ],
  },
]);

export default router;
