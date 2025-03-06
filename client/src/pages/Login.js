import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Custom hook to detect mobile view (viewport width < 768px)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function Login() {
  const isMobile = useIsMobile();

  // Use a different container class on mobile vs. desktop
  const containerClass = isMobile
    ? "w-auto max-w-sm bg-white p-4 rounded-lg shadow-lg"
    : "w-full max-w-md bg-white p-8 rounded-lg shadow-lg";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className={containerClass}>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/login" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-2">
          <span className="text-gray-600 text-sm">Don't have an account?</span>
          <Link to="/register" className="text-blue-600 text-sm ml-1 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
