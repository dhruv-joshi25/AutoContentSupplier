// LectureSchedule.js

import React from 'react';

const LectureSchedule = () => {
  // Dummy data for the schedule
  const lectureScheduleData = [
    { time: '09:00 AM', subject: 'Mathematics', location: 'Room 101' },
    { time: '11:00 AM', subject: 'Computer Science', location: 'Room 203' },
    { time: '02:00 PM', subject: 'Data Structures', location: 'Room 305' },
    // Add more schedule items as needed
  ];

  return (
    <div className="bg-gray-100 border-2 border-purple-500 rounded-lg shadow-md p-6 m-6">
      <h2 className="text-purple-500">Lecture Schedule</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">Time</th>
            <th className="py-2 px-4 border-b border-gray-300">Subject</th>
            <th className="py-2 px-4 border-b border-gray-300">Location</th>
          </tr>
        </thead>
        <tbody>
          {lectureScheduleData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-200 transition duration-300">
              <td className="py-2 px-4 border-b border-gray-300">{item.time}</td>
              <td className="py-2 px-4 border-b border-gray-300">{item.subject}</td>
              <td className="py-2 px-4 border-b border-gray-300">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LectureSchedule;
