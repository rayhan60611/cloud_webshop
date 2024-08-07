import { AuthContext } from "@/providers/AuthProviders";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;
