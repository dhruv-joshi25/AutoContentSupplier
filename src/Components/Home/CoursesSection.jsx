// src/components/CoursesSection.js
import React from "react";
import { motion } from "framer-motion";

const courseData = [
  {
    id: 1,
    title: "Computer Science 101",
    instructor: "Prof. Smith",
  },
  {
    id: 2,
    title: "Mathematics Fundamentals",
    instructor: "Dr. Johnson",
  },
  {
    id: 3,
    title: "Introduction to Physics",
    instructor: "Prof. Davis",
  },
];

const CourseCard = ({ title, instructor }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl"
    whileHover={{ scale: 1.1 }}
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-800">Instructor: {instructor}</p>
  </motion.div>
);

const CoursesSection = () => {
  return (
    <section id="courses" className="py-12">
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
