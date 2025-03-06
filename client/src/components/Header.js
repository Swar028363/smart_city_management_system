import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    FaHome,
    FaInfoCircle,
    FaChartPie,
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

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="bg-white text-neutral-800 shadow-md relative">
            <div className="container px-4 py-4 flex justify-between items-center">
                {/* Mobile Menu Button */}
                <button onClick={toggleSidebar} className="focus:outline-none">
                    <FaBars size={24} />
                </button>

                {/* Branding */}
                <h1 className="text-neutral-950 text-xl font-bold">
                    Smart City Management System
                </h1>

                {/* Desktop Navigation */}
                <nav className="md: hidden md:flex space-x-6">
                    <Link
                        to="/"
                        className="hover:text-blue-400 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-blue-400 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to="/dashboard"
                        className="hover:text-blue-400 transition-colors"
                    >
                        Dashboard
                    </Link>
                </nav>
            </div>

            {/* Sidebar Overlay & Sidebar */}
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />
        </header>
    );
}

function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const [isServicesOpen, setIsServicesOpen] = useState(true);
    const [isAccountOpen, setIsAccountOpen] = useState(true);

    return (
        <>
            {/* Overlay (Click to Close) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar Container */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform transition-transform duration-300 z-50 
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Sidebar Header */}
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button
                        onClick={toggleSidebar}
                        className="focus:outline-none"
                    >
                        <FaTimes size={22} />
                    </button>
                </div>

                <div className="md:hidden p-4">
                    <ul className={"mt-2 space-y-2"}>
                        {[
                            { path: "/", label: "Home", icon: <FaHome /> },
                            {
                                path: "/about",
                                label: "About",
                                icon: <FaInfoCircle />,
                            },
                            {
                                path: "/dashboard",
                                label: "Dashboard",
                                icon: <FaChartPie />,
                            },
                        ].map(({ path, label, icon }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center text-blue-600 font-bold"
                                            : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
                                    }
                                >
                                    <span className="mr-2">{icon}</span> {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* City Services Section */}
                <div className="p-4">
                    <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex justify-between items-center text-gray-700 font-semibold"
                    >
                        <span>City Services</span>
                        <span>{isServicesOpen ? "-" : "+"}</span>
                    </button>
                    <ul
                        className={`mt-2 space-y-2 ${
                            isServicesOpen ? "block" : "hidden"
                        }`}
                    >
                        {[
                            {
                                path: "/traffic",
                                label: "Traffic",
                                icon: <FaCar />,
                            },
                            {
                                path: "/public-transport",
                                label: "Public Transport",
                                icon: <FaBus />,
                            },
                            {
                                path: "/energy",
                                label: "Energy",
                                icon: <FaBolt />,
                            },
                            {
                                path: "/water",
                                label: "Water",
                                icon: <FaTint />,
                            },
                            {
                                path: "/waste",
                                label: "Waste",
                                icon: <FaRecycle />,
                            },
                            {
                                path: "/security",
                                label: "Security",
                                icon: <FaShieldAlt />,
                            },
                            {
                                path: "/healthcare",
                                label: "Healthcare",
                                icon: <FaHeartbeat />,
                            },
                        ].map(({ path, label, icon }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center text-blue-600 font-bold"
                                            : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
                                    }
                                >
                                    <span className="mr-2">{icon}</span> {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* User Account Section */}
                <div className="p-4">
                    <button
                        onClick={() => setIsAccountOpen(!isAccountOpen)}
                        className="w-full flex justify-between items-center text-gray-700 font-semibold"
                    >
                        <span>User Account</span>
                        <span>{isAccountOpen ? "-" : "+"}</span>
                    </button>
                    <ul
                        className={`mt-2 space-y-2 ${
                            isAccountOpen ? "block" : "hidden"
                        }`}
                    >
                        {[
                            {
                                path: "/login",
                                label: "Login",
                                icon: <FaSignInAlt />,
                            },
                            {
                                path: "/register",
                                label: "Register",
                                icon: <FaUserPlus />,
                            },
                        ].map(({ path, label, icon }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center text-blue-600 font-bold"
                                            : "flex items-center text-gray-700 hover:text-blue-500 transition-colors"
                                    }
                                >
                                    <span className="mr-2">{icon}</span> {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
