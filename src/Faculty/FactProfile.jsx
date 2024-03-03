//faculty profile
import React from "react";
import { motion } from "framer-motion";

const FactProfile = () => {
  // Realistic dummy data for faculty profile
  const facultyData = {
    name: "Dr. Jane Doe",
    position: "Assistant Professor",
    department: "Computer Science",
    email: "jane.doe@university.edu",
    contactNumber: "123-456-7890",
    researchInterests: [
      "Machine Learning",
      "Data Science",
      "Artificial Intelligence",
    ],
    education: [
      {
        degree: "Ph.D. in Computer Science",
        university: "University of Tech",
        year: "2015",
      },
      {
        degree: "M.S. in Artificial Intelligence",
        university: "Tech Institute",
        year: "2010",
      },
      {
        degree: "B.S. in Computer Engineering",
        university: "Engineering College",
        year: "2008",
      },
    ],
    publications: [
      {
        title: "Advanced Topics in Machine Learning",
        journal: "Journal of AI Research",
        year: "2023",
      },
      {
        title: "Data Science Applications in Healthcare",
        conference: "International Conference on Data Science",
        year: "2022",
      },
    ],
  };

  return (
      <motion.div
        className="flex-1 bg-white p-8 rounded-lg shadow-md mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-4">Faculty Profile</h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <p className="text-gray-600">
              <strong>Name:</strong> {facultyData.name} <br />
              <strong>Position:</strong> {facultyData.position} <br />
              <strong>Department:</strong> {facultyData.department} <br />
              <strong>Email:</strong> {facultyData.email} <br />
              <strong>Contact Number:</strong> {facultyData.contactNumber}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Education</h3>
            <ul className="list-disc pl-6">
              {facultyData.education.map((edu, index) => (
                <li key={index}>
                  {edu.degree} - {edu.university}, {edu.year}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Research Interests</h3>
            <ul className="list-disc pl-6">
              {facultyData.researchInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-lg font-semibold">Publications</h3>
          <ul className="list-disc pl-6">
            {facultyData.publications.map((publication, index) => (
              <li key={index}>
                {publication.title} -{" "}
                {publication.journal || publication.conference},{" "}
                {publication.year}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
  );
};

export default FactProfile;
