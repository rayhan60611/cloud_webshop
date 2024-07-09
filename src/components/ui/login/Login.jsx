import React from "react";
import { Input } from "../input";
import { Button } from "../button";

const Login = () => {
  return (
    <div className="container flex flex-col gap-6 items-center p-8 rounded-xl my-8 shadow-lg hover:shadow-2xl duration-500">
      <img className="w-12" src="../../../../public/logtech-black.png" alt="" />
      <h1 className="font-bold text-3xl">Login Panel</h1>
      <Input type="Email" placeholder="Email" />
      <Input type="Password" placeholder="Password" />
      <Button>Login</Button>
    </div>
  );
};

export default Login;
