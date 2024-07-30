import React, { useContext } from "react";
import { AuthContext } from "@/providers/AuthProviders";
import { LoaderPinwheel } from "lucide-react";
const PersistUser = ({ children }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <LoaderPinwheel className="animate-spin size-20 duration-1000" />
      </div>
    );
  }
  return children;
};

export default PersistUser;
