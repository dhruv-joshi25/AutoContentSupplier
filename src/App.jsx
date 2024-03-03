import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CoursesSection from "./Components/CoursePage/Course";
import Login from "./Components/LoginPage";
import ContactPage from "./Components/Contact";
import StudentRoutes from "./StudentRoutes"; // Correct the import path
import FacultyRoutes from "./FacultyRoutes";
import NoMatch from "./Faculty/NoMatch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <CoursesSection />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        {/* Include StudentRoutes here */}
        <Route path="/students/*" element={<StudentRoutes />} />
        <Route path="/faculty/*" element={<FacultyRoutes />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
