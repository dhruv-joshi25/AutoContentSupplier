import React from "react";
import { motion } from "framer-motion";

const Grades = () => {
  // Dummy data for Computer Science grades
  const computerScienceGrades = [
    { subject: "Mathematics", grade: "A" },
    { subject: "Computer Programming", grade: "B" },
    { subject: "Data Structures", grade: "A-" },
    { subject: "Algorithms", grade: "B+" },
    { subject: "Database Management", grade: "A+" },
  ];

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="bg-gray-100 border-2 border-blue-500 rounded-lg shadow-md p-6 m-6"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-blue-500">Computer Science Grades</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">Subject</th>
            <th className="py-2 px-4 border-b border-gray-300">Grade</th>
          </tr>
        </thead>
        <tbody>
          {computerScienceGrades.map((grade, index) => (
            <motion.tr
              key={index}
              variants={fadeInVariants}
              className="hover:bg-gray-200 transition duration-300"
            >
              <td className="py-2 px-4 border-b border-gray-300">
                {grade.subject}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {grade.grade}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Grades;
