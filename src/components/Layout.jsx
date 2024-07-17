import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./FixedPage/Navbar";
import Footer from "./FixedPage/Footer";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
     <Footer/>
    </>
  );
};

export default Layout;
