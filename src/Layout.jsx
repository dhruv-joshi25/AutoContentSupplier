// Layout.js
import React from "react";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/FooterSection";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
