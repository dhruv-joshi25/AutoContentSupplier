import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          Tech University
        </Link>
        <div className="flex-grow text-lg space-x-4 flex justify-center">
          <Link
            to="/"
            className="text-white hover:text-gray-300 font-bold-500 "
          >
            Home
          </Link>
          <Link to="/courses" className="text-white hover:text-gray-300">
            Courses
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </div>
        <div>
          <Link
            to="/login"
            className="text-white font-bold-500 px-4 py-2 rounded-md transition duration-300 hover:bg-gray-900"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
