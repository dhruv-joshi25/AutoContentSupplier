import React from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";

const StudentInterface = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-8 ml-64 overflow-x-hidden">
        {/* Main Content Goes Here */}
        <Profile />
        {/* Add more sections and content based on your needs */}
      </div>
    </div>
  );
};

export default StudentInterface;
