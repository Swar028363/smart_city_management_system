import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Waste() {
  const [wasteChartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Recycling Rate (%)",
        data: [45, 50, 55, 60, 65, 70],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold mb-4">Waste Management</h2>
      <p className="text-lg">
        Overseeing waste collection and recycling operations is crucial to
        maintaining a clean and sustainable city environment. Our waste
        management system ensures efficient collection, processing, and
        recycling of waste materials.
      </p>

      {/* Overview Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Overview of Waste Management</h3>
        <p className="text-gray-700">
          Our comprehensive waste management strategy includes regular
          collection, advanced sorting facilities, and robust recycling programs.
          By utilizing innovative technologies, we aim to reduce landfill waste
          and promote a circular economy.
        </p>
        <img
          src="https://cdn.britannica.com/05/154205-050-DEADC6AF/plants-water-waste.jpg"
          alt="Waste Management Overview"
          className="w-full rounded shadow"
        />
      </section>

      {/* Recycling Initiatives Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Recycling Initiatives</h3>
        <p className="text-gray-700">
          Recycling is a key component of our waste management system. We operate
          multiple recycling centers that process paper, plastics, metals, and
          electronic waste. Our initiatives focus on reducing environmental
          impact and fostering community participation in recycling programs.
        </p>
      </section>

      {/* Recycling Analytics Section */}
      <section className="bg-white shadow rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">Recycling Rate Analytics</h3>
        <Bar
          data={wasteChartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Monthly Recycling Rate (%)" },
            },
          }}
        />
        <p className="text-gray-700 mt-4">
          This chart displays the recycling rate over the past six months,
          reflecting the effectiveness of our waste management initiatives and
          community engagement in recycling programs.
        </p>
      </section>
    </div>
  );
}

export default Waste;
