import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/ui/Footer/Footer";
// import Navbar from "./components/ui/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarNew from "./components/ui/Navbar/NavbarNew";

function App() {
  return (
    // <div className="select-none flex flex-col justify-around 2xl:h-full">
    <div className="flex min-h-screen w-full flex-col">
      {/* <Navbar></Navbar> */}
      <NavbarNew />
      <Outlet />
      <Footer></Footer>
      <ToastContainer />
    </div>
    // </div>
  );
}

export default App;
