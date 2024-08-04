import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/ui/Router/Router.jsx";
import AuthProviders from "./providers/AuthProviders";
import ProductCartProvider from "./components/ui/allProducts/ProductCartProvider";
// import AllProducts from "./components/ui/allProducts/AllProducts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <ProductCartProvider>
        <RouterProvider router={router} />
      </ProductCartProvider>
    </AuthProviders>
  </React.StrictMode>
);
