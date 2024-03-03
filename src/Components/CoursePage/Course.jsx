// src/components/CoursesSection.js
import React from "react";
import { motion } from "framer-motion";
import computerImage from "./computer-image.jpg"; // Import the image
import mathsImage from "./Maths-Image.jpg"; // Import the image
import physicsImage from "./physics-image.jpg"; // Import the image

const courseData = [
  {
    id: 1,
    title: "Computer Science 101",
    instructor: "Prof. Smith",
    description:
      "An introduction to the fundamentals of computer science, covering topics such as algorithms, data structures, and programming.",
    image: computerImage, // Use the imported variable
  },
  {
    id: 2,
    title: "Mathematics Fundamentals",
    instructor: "Dr. Johnson",
    description:
      "Explore the essential mathematical concepts required for various fields, including calculus, algebra, and geometry.",
    image: mathsImage, // Use the imported variable
  },
  {
    id: 3,
    title: "Introduction to Physics",
    instructor: "Prof. Davis",
    description:
      "Discover the basic principles of physics, including mechanics, thermodynamics, and electromagnetism.",
    image: physicsImage, // Use the imported variable
  },
  // Add more courses as needed
];

const CourseCard = ({ title, instructor, description, image }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-xl"
    whileHover={{ scale: 1.05 }}
  >
    <div className="mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-800">Instructor: {instructor}</p>
    <p className="text-gray-700 mt-2">{description}</p>
  </motion.div>
);

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
