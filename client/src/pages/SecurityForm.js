import React, { useState } from "react";

function SecurityForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        incidentTitle: "",
        description: "",
        location: "",
        severity: "",
        evidence: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", formData);
        alert("Security issue reported. Thank you!");
        setFormData({
            fullName: "",
            email: "",
            incidentTitle: "",
            description: "",
            location: "",
            severity: "",
            evidence: null,
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Report a Security Issue
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-gray-700 font-medium"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="incidentTitle"
                        className="block text-gray-700 font-medium"
                    >
                        Incident Title
                    </label>
                    <input
                        type="text"
                        id="incidentTitle"
                        name="incidentTitle"
                        value={formData.incidentTitle}
                        onChange={handleChange}
                        placeholder="Brief title of the incident"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="block text-gray-700 font-medium"
                    >
                        Incident Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Provide a detailed description of the incident"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="location"
                            className="block text-gray-700 font-medium"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter location details"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="severity"
                            className="block text-gray-700 font-medium"
                        >
                            Severity
                        </label>
                        <select
                            id="severity"
                            name="severity"
                            value={formData.severity}
                            onChange={handleChange}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select severity</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="evidence"
                        className="block text-gray-700 font-medium"
                    >
                        Supporting Evidence (optional)
                    </label>
                    <input
                        type="file"
                        id="evidence"
                        name="evidence"
                        onChange={handleChange}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Submit Report
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SecurityForm;
