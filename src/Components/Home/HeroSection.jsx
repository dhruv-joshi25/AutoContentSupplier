import React from "react";
import heroImage from "../Home/Image3.jpg"; // Imported the image

const HeroSection = () => {
  return (
    <section className="h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`, // Use the imported image
          opacity: "0.5", // Adjust the opacity as needed
        }}
      />

      {/* Gradient Overlay for Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Tech University
          </h1>
          <p className="text-lg mb-8">
            Explore endless opportunities in education and innovation.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
