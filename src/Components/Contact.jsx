import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("mongodb://localhost:27017/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/3 max-w-sm shadow-xl p-6 rounded bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 text-white"
      >
        <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-solid border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-solid border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="w-full px-3 py-2 border border-solid border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 bg-white hover:bg-gray-200 px-4 py-2 text-gray-800 uppercase rounded text-xs tracking-wider font-semibold"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <div className="md:w-1/3 max-w-sm">
        {/* Add your image source and alt text */}
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample"
          className="w-full"
        />
      </div>
    </motion.section>
  );
};

export default ContactPage;
