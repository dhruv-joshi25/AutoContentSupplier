// src/components/NewsSection.js
import React from "react";

const NewsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News Article 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">News Article 1</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in lacinia ex. Curabitur tempor bibendum metus, in
              convallis velit molestie eu.
            </p>
            <a
              href="#"
              className="text-teal-500 hover:underline transition duration-300"
            >
              Read More
            </a>
          </div>

          {/* News Article 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">News Article 2</h3>
            <p className="text-gray-700 mb-4">
              Ut et sapien nec ligula eleifend suscipit. Fusce sit amet libero
              eu purus efficitur ultricies. Nullam vehicula, ipsum at hendrerit
              efficitur, odio erat imperdiet risus.
            </p>
            <a
              href="#"
              className="text-teal-500 hover:underline transition duration-300"
            >
              Read More
            </a>
          </div>

          {/* News Article 3 (Additional Article) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">News Article 3</h3>
            <p className="text-gray-700 mb-4">
              Phasellus dapibus varius quam, et feugiat lectus rhoncus in.
              Aliquam erat volutpat. Duis interdum justo eu massa tincidunt
              cursus.
            </p>
            <a
              href="#"
              className="text-teal-500 hover:underline transition duration-300"
            >
              Read More
            </a>
          </div>

          {/* Add more news articles as needed */}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
