import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="select-none flex flex-col justify-around 2xl:h-full">
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
