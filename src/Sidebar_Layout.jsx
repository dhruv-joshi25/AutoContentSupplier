// FactLayout.js
import React from "react";
import FactSidebar from "./Faculty/Fact_Sidebar";

const FactLayout = ({ children }) => {
  return <FactSidebar>{children} </FactSidebar>;
};

export default FactLayout;
