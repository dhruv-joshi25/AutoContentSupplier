import React from "react";
import { motion } from "framer-motion";

const Resources = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Dummy data for subjects
  const subjects = [
    {
      name: "Introduction to Computer Science",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Data Structures and Algorithms",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Web Development",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <motion.div
      className="flex h-screen bg-gray-100 w-full"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Main Content Area */}
      <div className="flex-1 p-8 ml-1/5 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Computer Science Course</h2>

        <p>
          Explore the exciting world of Computer Science and gain knowledge in
          various fundamental concepts.
        </p>

        <h3 className="text-lg font-semibold mt-4">Subjects:</h3>
        <ul className="list-disc pl-6">
          {subjects.map((subject, index) => (
            <li key={index} className="mb-3">
              <h4 className="text-xl font-semibold">{subject.name}</h4>
              <p>{subject.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Resources;
