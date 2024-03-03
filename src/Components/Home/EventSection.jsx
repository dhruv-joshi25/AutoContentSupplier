// src/components/EventsSection.js
import React from "react";

const EventsSection = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Event 1</h3>
            <p className="text-gray-700 mb-4">
              Date: February 15, 2023
              <br />
              Time: 2:00 PM - 4:00 PM
              <br />
              Location: Auditorium
            </p>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
              Register
            </button>
          </div>

          {/* Event 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Event 2</h3>
            <p className="text-gray-700 mb-4">
              Date: March 5, 2023
              <br />
              Time: 3:30 PM - 5:30 PM
              <br />
              Location: Conference Room
            </p>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
              Register
            </button>
          </div>

          {/* Event 3 (Additional Event) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Event 3</h3>
            <p className="text-gray-700 mb-4">
              Date: March 20, 2023
              <br />
              Time: 10:00 AM - 12:00 PM
              <br />
              Location: Seminar Hall
            </p>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
