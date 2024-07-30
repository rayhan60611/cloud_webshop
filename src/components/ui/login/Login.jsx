import { useContext } from "react";
import { Input } from "../input";
import { Button } from "../button";
import { AuthContext } from "@/providers/AuthProviders";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const { handleGooglePopupLogin } = useContext(AuthContext);

  // const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
  };
  console.log("login");
  // useEffect(() => {
  //   if (user) {
  //     navigate("/"); // Redirect to home page if user is already logged in
  //   }
  // }, [user, navigate]);

  return (
    <form onSubmit={handleLogin}>
      <div className="container flex justify-center ">
        <div className=" flex flex-col gap-6 items-center p-8 rounded-xl my-12  shadow-lg hover:shadow-2xl duration-500 w-full md:w-2/4 h-full z-10">
          <img
            className="w-12 animate-pulse"
            src="../../../../public/logtech-black.png"
            alt=""
          />
          <h1 className="font-bold text-3xl">Login Panel</h1>
          <Input type="Email" name="email" placeholder="Email" />
          <Input type="Password" name="password" placeholder="Password" />
          <Button type="submit">Login</Button>
          <hr className="w-full border" />
          <div>
            <Button onClick={handleGooglePopupLogin}>Login with Google</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
