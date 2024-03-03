import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white w-1/5 fixed-1 top-0 h-full overflow-y-auto">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Student Dashboard</h1>
        </div>
        <ul className="p-3">
          <li className="mb-4">
            <Link to="/students/profile" className="text-lg font-semibold">
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/students/resources" className="text-lg font-semibold">
              Resources
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/students/course" className="text-lg font-semibold">
              Courses
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/students/grades" className="text-lg font-semibold">
              Grades
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/students/schedule" className="text-lg font-semibold">
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
      <div className="m-7 flex-1">{children}</div>
    </div>
  );
};

export default Sidebar;
