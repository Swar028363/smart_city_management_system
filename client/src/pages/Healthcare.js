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

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Healthcare() {
  // Sample data for Hospital Bed Occupancy Rate chart
  const [occupancyChartData] = useState({
    labels: ["Central Hospital", "City Clinic", "Westside Medical", "East End Hospital"],
    datasets: [
      {
        label: "Bed Occupancy Rate (%)",
        data: [85, 75, 90, 80],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  // Sample data for Average Patient Wait Times chart
  const [waitTimeChartData] = useState({
    labels: ["Emergency", "Outpatient", "Surgery", "Diagnostics"],
    datasets: [
      {
        label: "Average Wait Time (minutes)",
        data: [30, 20, 40, 25],
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold mb-4">Healthcare Services</h2>
      <p className="text-lg">
        Access information and management tools for city healthcare facilities.
        Our healthcare system is designed to provide high-quality care and ensure rapid response during emergencies.
      </p>

      {/* Overview Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Overview of City Healthcare</h3>
        <p className="text-gray-700">
          The city’s healthcare infrastructure comprises a network of hospitals, clinics, and specialized care centers. Our system is built on a foundation of advanced technology and data analytics to streamline patient care and resource management.
        </p>
        <p className="text-gray-700">
          By integrating electronic health records, telemedicine services, and real-time monitoring, our goal is to enhance patient outcomes and ensure a responsive healthcare environment.
        </p>
      </section>

      {/* Hospitals and Clinics Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Hospitals & Clinics</h3>
        <img
          src="https://content3.jdmagicbox.com/comp/gandhinagar-gujarat/c1/9999p2764.2764.100914143403.s7c1/catalogue/civil-hospital-gandhinagar-sector-12-gandhinagar-gujarat-public-hospitals-5j8x09q315.jpg"
          alt="Hospital"
          className="w-full max-w-md rounded shadow"
        />
        <p className="text-gray-700">
          Our city is home to several state-of-the-art hospitals and clinics. Facilities like the Central Hospital and East End Medical Center offer a wide range of services—from emergency care to specialized treatments. These institutions are equipped with modern diagnostic tools and staffed by experienced professionals.
        </p>
        <p className="text-gray-700">
          Regular training and technology upgrades ensure that our facilities remain at the forefront of healthcare innovation, providing top-notch care to all citizens.
        </p>
      </section>

      {/* Emergency Services Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Emergency Services</h3>
        <img
          src="https://content3.jdmagicbox.com/comp/gandhinagar-gujarat/u7/9999pxx79.xx79.210910154058.q8u7/catalogue/divine-icu-on-wheel-sargasan-gandhinagar-gujarat-ambulance-services-35qys24zla.jpg"
          alt="Emergency Services"
          className="w-full max-w-md rounded shadow"
        />
        <p className="text-gray-700">
          In emergencies, time is critical. Our integrated emergency response system connects hospitals, ambulance services, and first responders to ensure rapid and effective care. Advanced communication systems and dedicated emergency units work around the clock to reduce response times and improve patient survival rates.
        </p>
      </section>

      {/* Healthcare Analytics Section */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold">Healthcare Analytics</h3>

        {/* Hospital Bed Occupancy Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="text-xl font-semibold mb-2">Hospital Bed Occupancy Rate</h4>
          <Bar
            data={occupancyChartData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "Bed Occupancy Rate by Hospital (%)" },
              },
            }}
          />
          <p className="text-gray-700 mt-4">
            This chart illustrates the bed occupancy rate across major hospitals in the city. Monitoring occupancy rates is crucial for managing patient loads, planning capacity expansions, and ensuring optimal resource allocation during peak periods.
          </p>
        </div>

        {/* Average Patient Wait Times Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="text-xl font-semibold mb-2">Average Patient Wait Times</h4>
          <Bar
            data={waitTimeChartData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "Average Wait Times by Department (minutes)" },
              },
            }}
          />
          <p className="text-gray-700 mt-4">
            This chart displays the average wait times across various healthcare departments. By analyzing wait times, healthcare administrators can identify bottlenecks, streamline processes, and enhance overall patient satisfaction.
          </p>
        </div>
      </section>

      {/* Hospital Locations Map Section using Google Maps */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">Hospital Locations Map</h3>
        <p className="text-gray-700">
          The map below shows search results for hospitals in Gandhinagar, Gujarat. You can zoom out to view hospitals in broader regions as well.
        </p>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow">
          <iframe
            title="Hospital Map"
            src="https://maps.google.com/maps?q=hospitals%20in%20Gandhinagar,%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="eager"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Healthcare;
