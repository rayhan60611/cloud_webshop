import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";

function App() {
  return (
    <div className="select-none">
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
