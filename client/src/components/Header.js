import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Branding Section */}
        <div className="flex items-center">
          {/* Replace with your logo image path if available */}
          <img src="/path/to/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-xl font-bold">Smart City Management System</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Dashboard
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
