import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaCar,
  FaBus,
  FaBolt,
  FaTint,
  FaRecycle,
  FaShieldAlt,
  FaHeartbeat,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(true);
  const [isAccountOpen, setIsAccountOpen] = useState(true);

  const sidebarContent = (
    <aside className="bg-gray-100 p-5 w-64 h-full">
      {/* Collapsible Section: City Services */}
      <div>
        <button
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className="w-full flex justify-between items-center text-gray-700 font-semibold focus:outline-none"
          aria-expanded={isServicesOpen}
          aria-controls="services-section"
        >
          <span>City Services</span>
          <span>{isServicesOpen ? "-" : "+"}</span>
        </button>
        <ul
          id="services-section"
          className={`mt-2 space-y-2 transition-all duration-300 ${
            isServicesOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <li>
            <NavLink
              to="/traffic"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-bold"
                  : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              <FaCar className="mr-2" /> Traffic
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/public-transport"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-bold"
                  : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              <FaBus className="mr-2" /> Public Transport
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/energy"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-bold"
                  : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              <FaBolt className="mr-2" /> Energy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/water"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-bold"
                  : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              <FaTint className="mr-2" /> Water
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/waste"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-bold"
                  : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              <FaRecycle className="mr-2" /> Waste
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/security"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-bold"
                  : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              <FaShieldAlt className="mr-2" /> Security
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/healthcare"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-bold"
                  : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              <FaHeartbeat className="mr-2" /> Healthcare
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Collapsible Section: User Account */}
      <div className="mt-6">
        <button
          onClick={() => setIsAccountOpen(!isAccountOpen)}
          className="w-full flex justify-between items-center text-gray-700 font-semibold focus:outline-none"
          aria-expanded={isAccountOpen}
          aria-controls="account-section"
        >
          <span>User Account</span>
          <span>{isAccountOpen ? "-" : "+"}</span>
        </button>
        <ul
          id="account-section"
          className={`mt-2 space-y-2 transition-all duration-300 ${
            isAccountOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-bold"
                  : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              <FaSignInAlt className="mr-2" /> Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center text-blue-600 font-bold"
                  : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              <FaUserPlus className="mr-2" /> Register
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden p-4 bg-gray-100 flex justify-between items-center">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="text-gray-700 focus:outline-none"
          aria-label="Open sidebar"
        >
          <FaBars size={24} />
        </button>
        <span className="font-semibold text-gray-700">Menu</span>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-transform transform ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => setIsMobileOpen(false)}
        ></div>
        <div className="relative bg-gray-100 w-64 h-full p-5">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-4 right-4 text-gray-700 focus:outline-none"
            aria-label="Close sidebar"
          >
            <FaTimes size={24} />
          </button>
          {sidebarContent}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">{sidebarContent}</div>
    </>
  );
}

export default Sidebar;
