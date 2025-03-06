import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function Register() {
    const isMobile = useIsMobile();

    // Use a different container class on mobile vs. desktop
    const containerClass = isMobile
      ? "w-auto max-w-sm bg-white p-4 rounded-lg shadow-lg"
      : "w-full max-w-md bg-white p-8 rounded-lg shadow-lg";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className={containerClass}>
                <h2 className="text-2xl font-bold text-center mb-6">
                    Register
                </h2>
                <form className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium"
                        >
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium"
                        >
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
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium"
                        >
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
                        Register
                    </button>
                </form>
                <div className="text-center mt-4">
                    <span className="text-gray-600 text-sm">
                        Already have an account?
                    </span>
                    <Link
                        to="/login"
                        className="text-blue-600 text-sm ml-1 hover:underline"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
