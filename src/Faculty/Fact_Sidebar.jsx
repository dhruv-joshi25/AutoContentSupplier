import React from "react";
import { Link } from "react-router-dom";

const FactSidebar = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* First div (Sidebar) */}
      <div className="bg-gray-800 text-white h-screen w-1/5 fixed">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Faculty Dashboard</h1>
        </div>
        <ul className="p-3">
          <li className="mb-4">
            <Link to="/faculty/profile" className="text-lg font-semibold">
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/faculty/Uploadresources" className="text-lg font-semibold">
              Upload Resources
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/faculty/schedule"
              className="text-lg font-semibold"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/" className="text-lg font-semibold">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="flex-1 p-8 ml-64 overflow-x-hidden"> */}

      {/* Second div (Content) */}
      <div className="flex-1 p-8 ml-64 overflow-x-hidden">{children}</div>
    </div>
  );
};

export default FactSidebar;
