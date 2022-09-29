import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { PopUpProvider } from "../../context";
import Footer from "./footer/Footer";
import MobileFooter from "./footer/MobileFooter";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([])
  return (
    <>
      <PopUpProvider productsInCart={productsInCart} setProductsInCart={setProductsInCart}>
        <ToastContainer />
        <div className="font-sans">
          <Navbar />
          <div className="bg-white">{children}</div>
          <MobileFooter />
          <Footer />
        </div>
      </PopUpProvider>
    </>
  );
};

export default Layout;
