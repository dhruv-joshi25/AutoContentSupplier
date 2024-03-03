// StudentRoutes.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentLayout from "./Students/StudentLayout";
import DashboardMainContent from "./Students/MainContent";
import Profile from "./Students/Profile";
import Std_Course from "./Students/Std_Course";
import Grades from "./Students/Grades";
import Schedule from "./Students/Schedule";
import Resources from "./Students/Resources";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route
        path="resources"
        element={
          <StudentLayout>
            <Resources />
          </StudentLayout>
        }
      />
      <Route
        path="dashboards"
        element={
          <StudentLayout>
            <DashboardMainContent />
          </StudentLayout>
        }
      />
      <Route
        path="profile"
        element={
          <StudentLayout>
            <Profile />
          </StudentLayout>
        }
      />
      <Route
        path="course"
        element={
          <StudentLayout>
            <Std_Course />
          </StudentLayout>
        }
      />
      <Route
        path="grades"
        element={
          <StudentLayout>
            <Grades />
          </StudentLayout>
        }
      />
      <Route
        path="schedule"
        element={
          <StudentLayout>
            <Schedule />
          </StudentLayout>
        }
      />
    </Routes>
  );
};

export default StudentRoutes;
