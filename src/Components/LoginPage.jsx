import React, { useState } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false); // Added state
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "student" && password === "student") {
      console.log("Student login successful");
      setTimeout(() => {
        navigate("../students/profile");
      }, 2000);
    } else if (email === "faculty" && password === "faculty") {
      console.log("Faculty login successful");
      setTimeout(() => {
        navigate("../faculty/profile");
      }, 2000);
    } else {
      console.log("Login failed");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 mb-10"
    >
      <div className="md:w-1/3 max-w-sm mb-10">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="image"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/3 max-w-sm shadow-xl p-12 px-5 rounded bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 text-white"
      >
        <h2 className="text-2xl font-bold mb-4 ml-5">Login</h2>
        <div className="flex items-center mb-4 ">
          <span className="mr-2">
            <AiOutlineUser />
          </span>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded bg-white text-gray-800"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">
            <AiOutlineLock />
          </span>
          <div className="relative w-full">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded bg-white text-gray-800"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
            </span>
          </div>
        </div>
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <a
            className="text-white hover:text-gray-200 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white hover:bg-gray-200 p-3 text-gray-800 uppercase rounded text-xs tracking-wider font-semibold"
            type="button"
            onClick={handleLogin}
          >
            Login
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Login;
