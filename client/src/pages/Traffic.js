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
                <img
                    src="https://via.placeholder.com/600x300?text=Traffic+Overview"
                    alt="Traffic Overview"
                    className="w-full rounded shadow"
                />
            </section>

            {/* Real-Time Traffic Chart Section */}
            <section className="bg-white shadow rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">
                    Real-Time Traffic Flow
                </h3>
                <Line
                    data={trafficChartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: { position: "top" },
                            title: {
                                display: true,
                                text: "Vehicle Count Throughout the Day",
                            },
                        },
                    }}
                />
                <p className="text-gray-700 mt-4">
                    This chart shows how the number of vehicles varies
                    throughout the day at key intersections. Understanding peak
                    traffic times allows us to adjust signal timings and deploy
                    dynamic rerouting to ease congestion.
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
        </div>
    );
}

export default Traffic;
