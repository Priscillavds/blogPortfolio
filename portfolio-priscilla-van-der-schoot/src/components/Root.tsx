import {Outlet} from "react-router-dom"
import Navbar from "./navigationbar/Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  );
}

export default Root;