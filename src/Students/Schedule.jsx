import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Schedule = () => {
  // Dummy data for the schedule
  const scheduleData = [
    { time: "09:00 AM", subject: "Mathematics", location: "Room 101" },
    { time: "11:00 AM", subject: "Computer Science", location: "Room 203" },
    { time: "02:00 PM", subject: "Data Structures", location: "Room 305" },
    // Add more schedule items as needed
  ];

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex h-screen bg-gray-100 w-full"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4 text-green-500">Schedule</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">Time</th>
              <th className="py-2 px-4 border-b border-gray-300">Subject</th>
              <th className="py-2 px-4 border-b border-gray-300">Location</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <motion.tr
                key={index}
                variants={fadeInVariants}
                className="hover:bg-gray-200 transition duration-300"
              >
                <td className="py-2 px-4 border-b border-gray-300">
                  {item.time}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {item.subject}
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  {item.location}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Schedule;
