import React from "react";
import { Route, Routes } from "react-router-dom";
import UploadResources from "./Faculty/UploadResources";
import FactProfile from "./Faculty/FactProfile";
import FactLayout from "./Sidebar_Layout";
import LectureSchedule from "./Faculty/LectureSchedule";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route
        path="Uploadresources"
        element={
          <FactLayout>
            <UploadResources />
          </FactLayout>
        }
      />

      <Route
        path="profile"
        element={
          <FactLayout>
            <FactProfile />
          </FactLayout>
        }
      />
      <Route
        path="schedule"
        element={
          <FactLayout>
            <LectureSchedule />
          </FactLayout>
        }
      />
    </Routes>
  );
};

export default StudentRoutes;
