import React from "react";

function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <p className="text-lg mb-8">
        Overview of city metrics and management tools will be displayed here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Traffic</h3>
          <p className="text-gray-600">
            Real-time updates on congestion and traffic flow.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Public Transport</h3>
          <p className="text-gray-600">
            Live data on bus, train, and transit schedules.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Energy</h3>
          <p className="text-gray-600">
            Energy consumption and production statistics.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Water</h3>
          <p className="text-gray-600">
            Monitoring water supply and usage patterns.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Waste</h3>
          <p className="text-gray-600">
            Data on waste collection and recycling efficiency.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Security</h3>
          <p className="text-gray-600">
            Updates on emergency services and city safety measures.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
          <p className="text-gray-600">
            Metrics on healthcare availability and response times.
          </p>
        </div>
      </div>
      {/* Analytics Section */}
      <div className="mt-8 bg-white shadow rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">Analytics Overview</h3>
        <p className="text-gray-600">
          Interactive charts and graphs can be integrated here to visualize key
          metrics.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register necessary Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Dashboard() {
//   // Initialize state with empty labels and data
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Traffic Flow",
//         data: [],
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//       },
//     ],
//   });

//   useEffect(() => {
//     // Generate initial data for the last 10 time points
//     const initialLabels = Array.from({ length: 10 }, () =>
//       new Date().toLocaleTimeString()
//     );
//     const initialData = Array.from({ length: 10 }, () =>
//       Math.floor(Math.random() * 100)
//     );

//     setChartData({
//       labels: initialLabels,
//       datasets: [
//         {
//           label: "Traffic Flow",
//           data: initialData,
//           fill: false,
//           borderColor: "rgb(75, 192, 192)",
//         },
//       ],
//     });

//     // Simulate real-time data updates every 2 seconds
//     const interval = setInterval(() => {
//       const newTime = new Date().toLocaleTimeString();
//       const newValue = Math.floor(Math.random() * 100);
//       setChartData((prevData) => {
//         // Append new data and maintain a fixed number of data points (e.g., 10)
//         const updatedLabels = [...prevData.labels, newTime].slice(-10);
//         const updatedData = [...prevData.datasets[0].data, newValue].slice(-10);
//         return {
//           labels: updatedLabels,
//           datasets: [
//             {
//               ...prevData.datasets[0],
//               data: updatedData,
//             },
//           ],
//         };
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
//       <div className="mb-8 bg-white shadow rounded-lg p-4">
//         <Line
//           data={chartData}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: {
//                 position: "top",
//               },
//               title: {
//                 display: true,
//                 text: "Real-Time Traffic Flow",
//               },
//             },
//           }}
//         />
//       </div>
//       <p className="text-lg">
//         This chart simulates real-time data updates using mock data. You can
//         integrate real API data or use a local JSON server to fetch dynamic data
//         for a production environment.
//       </p>
//     </div>
//   );
// }

// export default Dashboard;
