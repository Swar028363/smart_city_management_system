import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section
                className="relative h-96 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/599982/pexels-photo-599982.jpeg?cs=srgb&dl=pexels-kstupak-599982.jpg&fm=jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Welcome to the Smart City Management System
                    </h1>
                    <p className="text-xl text-gray-300">
                        Revolutionizing urban living through smart technology.
                    </p>
                    <Link
                        to="/dashboard"
                        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
                    >
                        Explore Dashboard
                    </Link>
                </div>
            </section>

            {/* Latest Announcements Section */}
            <section className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                    Latest Announcements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold mb-2">
                            City Traffic Update
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Major roadworks on 5th Avenue due to infrastructure
                            upgrades.
                        </p>
                        <a
                            href="/news/traffic-update"
                            className="text-blue-600 text-sm mt-2 inline-block hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold mb-2">
                            New Metro Line
                        </h3>
                        <p className="text-gray-600 text-sm">
                            The new metro line connecting downtown to the
                            suburbs is now operational.
                        </p>
                        <a
                            href="/news/metro-line"
                            className="text-blue-600 text-sm mt-2 inline-block hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-bold mb-2">
                            Sustainability Initiatives
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Innovative green energy projects launched to power
                            the city sustainably.
                        </p>
                        <a
                            href="/news/sustainability"
                            className="text-blue-600 text-sm mt-2 inline-block hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </section>

            {/* Featured Smart City Modules Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <Link to="/traffic" className="block">
                            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                                {/* <img
                  src="https://via.placeholder.com/100?text=Traffic"
                  alt="Traffic Management"
                  className="mx-auto mb-4"
                /> */}
                                <h3 className="text-xl font-bold text-center">
                                    Traffic Management
                                </h3>
                                <p className="text-gray-600 text-center text-sm mt-2">
                                    Real-time monitoring to ease congestion.
                                </p>
                            </div>
                        </Link>
                        <Link to="/public-transport" className="block">
                            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                                {/* <img
                  src="https://via.placeholder.com/100?text=Transport"
                  alt="Public Transport"
                  className="mx-auto mb-4"
                /> */}
                                <h3 className="text-xl font-bold text-center">
                                    Public Transport
                                </h3>
                                <p className="text-gray-600 text-center text-sm mt-2">
                                    Efficient transit routes and schedules.
                                </p>
                            </div>
                        </Link>
                        <Link to="/energy" className="block">
                            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                                {/* <img
                  src="https://via.placeholder.com/100?text=Energy"
                  alt="Energy Management"
                  className="mx-auto mb-4"
                /> */}
                                <h3 className="text-xl font-bold text-center">
                                    Energy Management
                                </h3>
                                <p className="text-gray-600 text-center text-sm mt-2">
                                    Optimizing energy for sustainability.
                                </p>
                            </div>
                        </Link>
                        <Link to="/water" className="block">
                            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                                {/* <img
                  src="https://via.placeholder.com/100?text=Water"
                  alt="Water Management"
                  className="mx-auto mb-4"
                /> */}
                                <h3 className="text-xl font-bold text-center">
                                    Water Management
                                </h3>
                                <p className="text-gray-600 text-center text-sm mt-2">
                                    Ensuring reliable and safe water supply.
                                </p>
                            </div>
                        </Link>
                        <Link to="/waste" className="block">
                            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                                {/* <img
                  src="https://via.placeholder.com/100?text=Waste"
                  alt="Waste Management"
                  className="mx-auto mb-4"
                /> */}
                                <h3 className="text-xl font-bold text-center">
                                    Waste Management
                                </h3>
                                <p className="text-gray-600 text-center text-sm mt-2">
                                    Efficient waste recycling and disposal.
                                </p>
                            </div>
                        </Link>
                        <Link to="/security" className="block">
                            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                                {/* <img
                  src="https://via.placeholder.com/100?text=Security"
                  alt="Security Services"
                  className="mx-auto mb-4"
                /> */}
                                <h3 className="text-xl font-bold text-center">
                                    Security Services
                                </h3>
                                <p className="text-gray-600 text-center text-sm mt-2">
                                    Advanced surveillance and emergency
                                    response.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="max-w-5xl mx-auto px-4 text-center py-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Join the Smart City Revolution
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Be a part of the change. Discover how our innovative
                    solutions are making urban living smarter, safer, and more
                    efficient.
                </p>
                <Link
                    to="/register"
                    className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
                >
                    Get Started
                </Link>
            </section>
        </div>
    );
}

export default Home;
