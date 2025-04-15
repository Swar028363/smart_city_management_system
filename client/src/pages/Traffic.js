import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Traffic() {
    const [trafficChartData] = useState({
        labels: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
        datasets: [
            {
                label: "Vehicle Count",
                data: [50, 120, 90, 150, 180, 100],
                fill: false,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                tension: 0.4,
            },
        ],
    });

    const [forecastChartData] = useState({
        labels: ["Now", "1 Hour", "2 Hours", "3 Hours", "4 Hours", "5 Hours"],
        datasets: [
            {
                label: "Forecasted Vehicle Count",
                data: [90, 110, 150, 130, 160, 140],
                fill: false,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                tension: 0.4,
            },
        ],
    });

    const [feedback, setFeedback] = useState("");
    const [feedbackStatus, setFeedbackStatus] = useState("");

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        console.log("User Feedback:", feedback);
        setFeedbackStatus("Thank you for your feedback!");
        setFeedback("");
        setTimeout(() => setFeedbackStatus(""), 3000);
    };

    const handleRouteSuggestion = (e) => {
        e.preventDefault();
        console.log("Route Suggestion:", feedback);
        setFeedbackStatus("Thank you for your route suggestion!");
        setFeedback("");
        setTimeout(() => setFeedbackStatus(""), 3000);
    };

    const handleExportData = () => {
        const csvData =
            "Time,Vehicle Count\n6AM,50\n9AM,120\n12PM,90\n3PM,150\n6PM,180\n9PM,100"; // Example data
        const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "traffic_data.csv");
            link.click();
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-8">
            <h2 className="text-3xl font-bold mb-4">Traffic Management</h2>
            <p className="text-lg">
                Monitor and manage real-time traffic data across the city to
                reduce congestion and improve commute efficiency.
            </p>

            {/* Traffic Overview Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">Traffic Overview</h3>
                <p className="text-gray-700">
                    Our traffic management system collects real-time data from
                    sensors, cameras, and connected vehicles, providing critical
                    insights into traffic flow, congestion hotspots, and travel
                    times. This data is essential for optimizing traffic
                    signals, planning routes, and coordinating emergency
                    responses.
                </p>
            </section>

            {/* Traffic Alerts Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">Traffic Alerts</h3>
                <ul className="space-y-2">
                    <li className="bg-yellow-100 p-4 rounded border border-yellow-200">
                        <p className="font-semibold">Accident on Highway 5</p>
                        <p className="text-gray-700">
                            Expect delays for 1 hour.
                        </p>
                    </li>
                    <li className="bg-red-100 p-4 rounded border border-red-200">
                        <p className="font-semibold">
                            Heavy Congestion on Main Street
                        </p>
                        <p className="text-gray-700">
                            Alternate routes recommended.
                        </p>
                    </li>
                </ul>
            </section>

            {/* Real-Time Traffic Chart Section */}
            <section className="bg-white shadow rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">
                    Real-Time Traffic Flow
                </h3>
                <div className="w-full h-80 sm:h-96">
                    <Line
                        data={trafficChartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { position: "top" },
                                title: {
                                    display: true,
                                    text: "Vehicle Count Throughout the Day",
                                },
                            },
                        }}
                    />
                </div>
                <p className="text-gray-700 mt-4">
                    This chart shows how the number of vehicles varies
                    throughout the day at key intersections. Understanding peak
                    traffic times allows us to adjust signal timings and deploy
                    dynamic rerouting to ease congestion.
                </p>
            </section>

            {/* Traffic Forecasting Section */}
            <section className="bg-white shadow rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Traffic Forecast</h3>
                <div className="w-full h-80 sm:h-96">
                    <Line
                        data={forecastChartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { position: "top" },
                                title: {
                                    display: true,
                                    text: "Traffic Forecast for the Next 5 Hours",
                                },
                            },
                        }}
                    />
                </div>
                <p className="text-gray-700 mt-4">
                    This chart provides a forecast of the vehicle count for the
                    upcoming hours, helping us predict congestion and plan
                    accordingly.
                </p>
            </section>

            {/* Traffic Solutions Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">Traffic Solutions</h3>
                <p className="text-gray-700">
                    Based on the analyzed real-time data, our system implements
                    dynamic signal control, intelligent rerouting strategies,
                    and public notifications to alleviate congestion. Future
                    enhancements include integrating predictive analytics and
                    AI-powered algorithms to further optimize urban traffic flow
                    and emergency response.
                </p>
            </section>

            {/* Traffic View Section */}
            <section className="space-y-6">
                <h3 className="text-2xl font-bold">Traffic View</h3>
                <p className="text-gray-700">
                    View current traffic conditions in Gandhinagar.
                </p>
                <div className="w-full h-64 rounded-lg overflow-hidden shadow">
                    <iframe
                        title="Traffic Map"
                        src="https://maps.google.com/maps?q=Gandhinagar,Gujarat&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Export Data Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">Export Traffic Data</h3>
                <button
                    onClick={handleExportData}
                    className="px-4 py-2 bg-green-600 text-white rounded"
                >
                    Export Data (CSV)
                </button>
            </section>

            {/* Route Suggestion Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">
                    Suggest an Alternative Route
                </h3>
                <p className="text-gray-700">
                    Help us improve the traffic flow by suggesting alternate
                    routes to avoid congestion.
                </p>
                <form onSubmit={handleRouteSuggestion} className="space-y-2">
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Describe your suggested route"
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="3"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Submit Suggestion
                    </button>
                </form>
                {feedbackStatus && (
                    <p className="text-green-700 font-semibold">
                        {feedbackStatus}
                    </p>
                )}
            </section>

            {/* Contact Us Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">Contact Us</h3>
                <p className="text-gray-700">
                    Have feedback or need assistance? Let us know:
                </p>
                <form onSubmit={handleFeedbackSubmit} className="space-y-2">
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Enter your feedback"
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="3"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Submit Feedback
                    </button>
                </form>
                {feedbackStatus && (
                    <p className="text-green-700 font-semibold">
                        {feedbackStatus}
                    </p>
                )}
            </section>
        </div>
    );
}

export default Traffic;
