import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  // Dummy data for the student profile
  const studentData = {
    name: "John Doe",
    course: "Bachelor of Science in Computer Science",
    studentID: "S123456",
    email: "john.doe@example.com",
    address: "123 Main Street, Cityville",
    contactNumber: "123-456-7890",
    dob: "January 1, 2000",
    education: [
      {
        degree: "High School Diploma",
        school: "City High School",
        year: "2018",
      },
      {
        degree: "Bachelor's Degree",
        school: "University of Tech",
        year: "2022",
      },
    ],
    courses: ["Web Development", "Data Structures", "Database Management"],
    achievements: ["Dean's List", "Hackathon Winner"],
    extracurriculars: ["Coding Club", "Sports Team"],
    additionalContact: {
      emergencyContact: "Jane Doe (Parent)",
      emergencyContactNumber: "987-654-3210",
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex h-screen bg-gray-100"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Main Content Area */}
      <div className="flex-1 p-8 ml-1/5 flex flex-wrap">
        {/* Column 1 */}
        <div className="w-full md:w-1/2 mb-4 pr-4">
          {/* Student Information */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md mb-4"
            variants={fadeInVariants}
          >
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <p className="text-gray-600">
              <strong>Name:</strong> {studentData.name}
              <br />
              <strong>Course:</strong> {studentData.course}
              <br />
              <strong>Student ID:</strong> {studentData.studentID}
              <br />
              {/* ... (remaining content) */}
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md mb-4"
            variants={fadeInVariants}
          >
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <ul className="list-disc ml-6">
              {studentData.education.map((edu, index) => (
                <li key={index}>
                  {edu.degree} - {edu.school}, {edu.year}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/2 mb-4 pl-4">
          {/* Courses Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md mb-4"
            variants={fadeInVariants}
          >
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="list-disc ml-6">
              {studentData.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md mb-4"
            variants={fadeInVariants}
          >
            <h3 className="text-lg font-semibold mb-4">Achievements</h3>
            <ul className="list-disc ml-6">
              {studentData.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </motion.div>

          {/* Extracurricular Activities Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md mb-4"
            variants={fadeInVariants}
          >
            <h3 className="text-lg font-semibold mb-4">
              Extracurricular Activities
            </h3>
            <ul className="list-disc ml-6">
              {studentData.extracurriculars.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </motion.div>

          {/* Additional Contact Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md mb-4"
            variants={fadeInVariants}
          >
            <h3 className="text-lg font-semibold mb-4">Additional Contact</h3>
            <p className="text-gray-600">
              <strong>Emergency Contact:</strong>{" "}
              {studentData.additionalContact.emergencyContact}
              <br />
              <strong>Contact Number:</strong>{" "}
              {studentData.additionalContact.emergencyContactNumber}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
