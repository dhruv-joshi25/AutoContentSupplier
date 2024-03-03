import React, { useState } from "react";
import axios from "axios";

const UploadResources = () => {
  const [resourceName, setResourceName] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {
    // Make API call
    axios
      .post("http://127.0.0.1:8000/crwoling/", {
        topic: resourceName  
      })
      .then((response) => {
        console.log("Submitted successfully:", response.data);
        setResourceName("")
        setResponse(response.data)
      })
      .catch((error) => {
        console.error("Submission error:", error)
      })
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Upload Resources</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold mb-4">Resource Information</h3>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Resource Name:
            </label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadResources;