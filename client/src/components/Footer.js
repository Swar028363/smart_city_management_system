import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
                {/* Branding Section */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="font-bold text-xl">Smart City</span>
                    </div>
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Smart City Management
                        System. All rights reserved.
                    </p>
                </div>

                {/* Quick Links & Social Media Section */}
                <div className="flex flex-col items-center mt-4 md:mt-0">
                    {/* Quick Links */}
                    <div className="flex space-x-4 mb-4">
                        <Link
                            to="/privacy"
                            className="text-sm hover:text-blue-400 transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms"
                            className="text-sm hover:text-blue-400 transition-colors duration-200"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            to="/contact"
                            className="text-sm hover:text-blue-400 transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Social Media Links with Animation & Hover Effects */}
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            className="hover:text-blue-500 transition-transform transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            className="hover:text-blue-400 transition-transform transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="hover:text-blue-600 transition-transform transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
