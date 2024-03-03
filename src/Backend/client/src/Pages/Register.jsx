import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = "http://127.0.0.1:8000";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const response = await fetch(API_BASE_URL + "/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, confirm_password: confirmPassword }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Registration successful!");
      setError("Success");
      navigate("/login");
    } else {
      console.error(data.error);
      setError(data.error);
    }
  };

  return (
    <section>
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-xl mx-auto lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
              Sign Up.
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="text"
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      autoComplete="text"
                      required=""
                      placeholder="Your Full Name"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="currentPassword"
                      required=""
                      placeholder="Enter Password"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Conform Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="text"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      autoComplete="currentPassword"
                      required=""
                      placeholder="Conform Password"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                {error && <p className="text-2xl text-slate-900">{error}</p>}

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="flex flex-col items-center mt-5">
                <p className="text-gray-500">
                  Register already?
                  <Link to="/login" className="ml-1 font-medium text-blue-400">
                    Sign in now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
