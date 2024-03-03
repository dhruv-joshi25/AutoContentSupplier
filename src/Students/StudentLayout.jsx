// Layout.js
import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
};
export default Layout;
