import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const API_BASE_URL = "http://127.0.0.1:8000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const response = await fetch(API_BASE_URL + "/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Login successful!");
      navigate("/Home");
    } else {
      console.error(data.error);
      setError(data.error);
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-xl mx-auto lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
              Sign in.
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
                      onChange={(e) => setName(e.target.value)}
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
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="currentPassword"
                      required=""
                      placeholder="Your Password"
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
                    Sign in
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center gap-4 mt-4">
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-neutral-600"
                >
                  New to Here?
                </label>
                <Link
                  to="/register"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign up now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
