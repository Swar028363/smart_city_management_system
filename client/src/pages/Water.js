import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

function Water() {
    const [waterChartData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Water Consumption (ML)",
                data: [120, 110, 115, 130, 125, 140],
                fill: false,
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                tension: 0.4,
            },
        ],
    });

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-8">
            <h2 className="text-3xl font-bold mb-4">Water Management</h2>
            <p className="text-lg">
                Monitoring and managing water supply and quality across the
                city.
            </p>

            {/* Overview Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">
                    Overview of Water Management
                </h3>
                <p className="text-gray-700">
                    Our water management system is designed to ensure a reliable
                    and safe water supply for all residents. This includes
                    monitoring water sources, managing distribution networks,
                    and ensuring water quality through rigorous testing and
                    treatment processes.
                </p>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZoiw19oMVOvqDjoAAvuuCKOnn8mlturk2Q&s"
                    alt="Water Management Overview"
                    className="w-full max-w-md rounded shadow"
                />
            </section>

            {/* Water Supply & Distribution Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">
                    Water Supply & Distribution
                </h3>
                <p className="text-gray-700">
                    The city's water supply is managed through a network of
                    reservoirs, treatment plants, and distribution pipelines.
                    Modern technology and continuous monitoring ensure that
                    water is delivered efficiently and sustainably.
                </p>
            </section>

            {/* Water Quality Monitoring Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">
                    Water Quality Monitoring
                </h3>
                <p className="text-gray-700">
                    Regular testing and advanced filtration systems help
                    maintain high water quality standards. Our state-of-the-art
                    water treatment facilities work round-the-clock to ensure
                    that all water meets strict safety and quality guidelines.
                </p>
            </section>

            {/* Water Consumption Trends Chart Section */}
            <section className="bg-white shadow rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">
                    Water Consumption Trends
                </h3>
                <Line
                    data={waterChartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: { position: "top" },
                            title: {
                                display: true,
                                text: "Monthly Water Consumption (in ML)",
                            },
                        },
                    }}
                />
                <p className="text-gray-700 mt-4">
                    This chart displays the monthly water consumption trends,
                    providing insights into usage patterns and helping identify
                    areas for efficiency improvements.
                </p>
            </section>
        </div>
    );
}

export default Water;
