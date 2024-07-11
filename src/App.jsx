import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import DemoCarousel from "./components/ui/homePage/DemoCarousel";

function App() {
  return (
    <div className="select-none flex flex-col justify-around 2xl:h-full">
      <Navbar></Navbar>
      <DemoCarousel />
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
