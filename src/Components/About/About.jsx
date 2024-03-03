import React from "react";
import { FaBuilding, FaUsers, FaGlobe } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder",
    bio: "Passionate visionary with a mission to revolutionize education.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Lead Developer",
    bio: "Innovative thinker, coding enthusiast, and tech wizard.",
  },
  // Add more team members as needed
];

const About = () => {
  return (
    <div className="container mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
      <div className="mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
        <section className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-black flex items-center">
            <FaBuilding className="mr-2" />
            Our Mission
          </h2>
          <p className="text-gray-800">
            To empower individuals through accessible, high-quality education
            and inspire innovation in the ever-evolving landscape of technology.
          </p>
        </section>
      </div>
      <div className="mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
        <section className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-black flex items-center">
            <FaGlobe className="mr-2" />
            Our History
          </h2>
          <p className="text-gray-800">
            Tech University, established in 2010, has been a pioneer in creating
            an inclusive learning space for technology enthusiasts. Our journey
            is marked by a commitment to excellence and a passion for fostering
            knowledge.
          </p>
        </section>
      </div>
      <div className="mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
        <section className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-black flex items-center">
            <FaUsers className="mr-2" />
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {teamMembers.map((member) => (
              <div key={member.id} className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {member.name}
                </h3>
                <p className="text-lg mb-2 text-gray-800">{member.role}</p>
                <p className="text-gray-800">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mb-8">
        <h2 className="text-4xl font-bold mb-4 text-black flex items-center">
          <FaGlobe className="mr-2" />
          Our Values
        </h2>
        <p className="text-gray-800">
          At Tech University, we believe in fostering a culture of curiosity,
          collaboration, and continuous learning. Our values shape our
          commitment to excellence and drive our pursuit of innovation.
        </p>
      </section>

      {/* Add more sections as per your needs */}
    </div>
  );
};

export default About;
