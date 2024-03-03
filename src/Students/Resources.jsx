import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ref, get } from "firebase/database";
import { database } from "../lib/db";
import Layout from "./StudentLayout";

const Resources = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // State to track the selected subject
  const [selectedSubject, setSelectedSubject] = useState(0); // Set the default index to 0 for "Maths"
  const [resources, setResources] = useState(null);

  // Dummy data for subjects
  const subjects = ["Python", "Physics", "Science"];

  useEffect(() => {
    // Create a reference to the database node
    const resourcesRef = ref(database, "related_links");

    // Fetch the data
    get(resourcesRef).then((snapshot) => {
      if (snapshot.exists()) {
        setResources(snapshot.val());
      }
    });
  }, []);

  // Object mapping subjects to their content
  const subjectContent = {
    python: (
      <>
        <img
          src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="python"
          className="mt-4 rounded-md"
        />
      </>
    ),
    Physics: (
      <>
        <h4>Physics Resources</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum sapien nec ex faucibus, vel ullamcorper metus fermentum.
          Integer vitae risus id sapien laoreet dignissim.
        </p>
        {/* Add more content specific to Physics */}
      </>
    ),
    Science: (
      <>
        <h4>Science Resources</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum sapien nec ex faucibus, vel ullamcorper metus fermentum.
          Integer vitae risus id sapien laoreet dignissim.
        </p>
        {/* Add more content specific to Science */}
      </>
    ),
  };

  return (
    <Layout>
      <motion.div
        className="flex h-screen bg-gray-100 w-full"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {/* Main Content Area */}
        <div className="flex-1 p-8 ml-1/5 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Resources</h2>

          {/* Navigation for Subjects */}
          <div className="flex space-x-4 mb-4">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer py-2 px-4 rounded-md ${
                  selectedSubject === index
                    ? "bg-gray-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
                onClick={() => setSelectedSubject(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {subject}
              </motion.div>
            ))}
          </div>

          {/* Display Resources based on the selected subject */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md mb-4 flex-1"
            variants={fadeInVariants}
          >
            <h3 className="text-lg font-semibold mb-4">
              Resources for {subjects[selectedSubject]}
            </h3>
            {subjectContent[subjects[selectedSubject]]}
          </motion.div>

          {/* Add more sections and content based on your needs */}
          <div>
            <h2>Resources</h2>

            {resources && (
              <div className="mx-auto p-4 bg-gray-200">
                {Object.keys(resources).map((key) => (
                  <div key={key}>
                    {Array.isArray(resources[key]) ? (
                      resources[key]
                        .slice(0, 10)
                        .map((link) => <a href={link}>{link}</a>)
                    ) : (
                      <a href={resources[key]}>{resources[key]}</a>
                    )}
                    {key === "youtube_links" &&
                      resources[key].slice(0, 10).map((link) => (
                        <a key={link} href={link}>
                          {link}
                        </a>
                      ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Resources;
