import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="mb-2">Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="list-none">
            <li>About Us</li>
            <li>Academics</li>
            <li>Admissions</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="flex items-center text-lg font-bold mb-2">
            Follow Us
          </h3>
          <div className="flex items-center space-x-4 ">
            <a href="#" className="text-xl hover:text-teal-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-teal-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-teal-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="col-span-3 mt-6">
          <p>&copy; 2023 Tech University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
