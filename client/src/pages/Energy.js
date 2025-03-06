import React, { useState, useEffect } from "react";
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

// Custom hook to detect mobile view (viewport width < 768px)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return isMobile;
}

function Energy() {
  const isMobile = useIsMobile();

  // Existing chart: Energy Production by Source
  const [chartData] = useState({
    labels: ["Solar", "Wind", "Hydro", "Fossil Fuels", "Nuclear"],
    datasets: [
      {
        label: "Energy Production (MW)",
        data: [50, 80, 40, 120, 60],
        backgroundColor: [
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  // Additional chart: Energy Production vs. Consumption
  const productionConsumptionData = {
    labels: ["Solar", "Wind", "Hydro", "Fossil Fuels", "Nuclear"],
    datasets: [
      {
        label: "Production (MW)",
        data: [50, 80, 40, 120, 60],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Consumption (MW)",
        data: [45, 75, 35, 130, 55],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Additional chart: Energy Imports and Exports
  const importsExportsData = {
    labels: ["Imports", "Exports"],
    datasets: [
      {
        label: "Energy (MW)",
        data: [30, 20],
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold mb-4">Energy Management</h2>
      <p className="text-lg">
        Our city’s energy portfolio is as diverse as it is innovative.
        By harnessing a blend of renewable and conventional energy
        sources, we ensure a reliable, efficient, and sustainable power
        supply for all citizens.
      </p>

      {/* Power Plant Information Sections */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Solar Power Plants</h3>
        <img
          src="https://cdn.narendramodi.in/wp-content/uploads/2012/04/solar-ph-inner2.jpg"
          alt="Solar Power Plant"
          className="w-full max-w-md rounded shadow"
        />
        <p className="text-gray-700">
          Solar power plants harness the abundant energy of the sun
          through photovoltaic panels. In our city, expansive solar
          farms like the “Sunrise Solar Farm” convert sunlight
          directly into electricity. These installations are
          strategically located in high-sunlight areas to maximize
          efficiency and reduce our carbon footprint.
        </p>
        <p className="text-gray-700">
          Continuous improvements in solar technology have led to
          significant cost reductions and enhanced energy conversion
          rates. With ongoing investments in solar energy storage, our
          city is ensuring that renewable power remains available even
          during non-peak sunlight hours.
        </p>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Wind Energy Farms</h3>
        <img
          src="https://www.evwind.es/wp-content/uploads/2013/05/gamesa-in-india-wind-farm.jpg"
          alt="Wind Energy Farm"
          className="w-full max-w-md rounded shadow"
        />
        <p className="text-gray-700">
          Wind energy is captured by towering turbines that convert
          kinetic energy from the wind into electrical power. The
          “Coastal Wind Farm” is a prime example, located in areas
          with high wind speeds, ensuring efficient energy generation.
        </p>
        <p className="text-gray-700">
          These wind farms not only contribute significantly to our
          renewable energy mix but also stimulate local economies by
          creating jobs in maintenance and operations.
        </p>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">
          Hydroelectric Power Stations
        </h3>
        <img
          src="https://thumbs.dreamstime.com/b/sant-sarovar-dam-famous-one-day-picnic-spot-located-gujarat-state-capital-city-gandhinagar-sant-sarovar-dam-gandhinagar-202696352.jpg"
          alt="Hydroelectric Power Station"
          className="w-full max-w-md rounded shadow"
        />
        <p className="text-gray-700">
          Hydroelectric power stations generate electricity by
          harnessing the energy of flowing water. Facilities like the
          “River Bend Hydroelectric Station” utilize the natural flow
          of rivers to produce consistent, renewable energy. This
          method is highly reliable, particularly during rainy
          seasons.
        </p>
        <p className="text-gray-700">
          As one of the oldest forms of renewable energy,
          hydroelectric power provides a stable base load, helping to
          balance the overall energy grid.
        </p>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">
          Fossil Fuel Power Plants
        </h3>
        <img
          src="https://powerphilippines.com/wp-content/uploads/2016/07/fossil-fuels-to-remain-a-part-of-ph-energy-mix.jpg"
          alt="Fossil Fuel Power Plant"
          className="w-full max-w-md rounded shadow"
        />
        <p className="text-gray-700">
          While our focus is on renewable energy, fossil fuel power
          plants continue to play a vital role in meeting peak demand.
          Plants such as the “Central Thermal Plant” burn coal or
          natural gas to produce electricity reliably, even during
          high-consumption periods.
        </p>
        <p className="text-gray-700">
          Modern fossil fuel plants have been upgraded with cleaner
          technologies and emission controls, striving to minimize
          environmental impact while ensuring uninterrupted power
          supply.
        </p>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Nuclear Power Plants</h3>
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/nuclear-energy-251357649-16x9.jpg?VersionId=yoy4DCfVGuV7uQtY4PzKCDtiHR52gNHn"
          alt="Nuclear Power Plant"
          className="w-full max-w-md rounded shadow"
        />
        <p className="text-gray-700">
          Nuclear power plants generate electricity through controlled
          nuclear reactions. The “City Nuclear Facility” leverages
          advanced reactor designs and stringent safety protocols to
          produce a high output of low-carbon power.
        </p>
        <p className="text-gray-700">
          Despite public concerns, nuclear energy remains a crucial
          part of our energy mix due to its capacity for large-scale
          power generation and its minimal greenhouse gas emissions
          during operation.
        </p>
      </section>

      {/* Existing Chart Section */}
      <section className="bg-white shadow rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">
          Energy Production Overview
        </h3>
        <div className={isMobile ? "relative h-64" : ""}>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: isMobile ? false : true,
              plugins: {
                legend: { position: "top" },
                title: {
                  display: true,
                  text: "Energy Production by Source (MW)",
                },
              },
            }}
          />
        </div>
      </section>

      {/* Additional Analytics Section */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold">
          Additional Energy Analytics
        </h3>

        {/* Energy Production vs. Consumption Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="text-xl font-semibold mb-2">
            Energy Production vs. Consumption
          </h4>
          <div className={isMobile ? "relative h-64" : ""}>
            <Bar
              data={productionConsumptionData}
              options={{
                responsive: true,
                maintainAspectRatio: isMobile ? false : true,
                plugins: {
                  legend: { position: "top" },
                  title: {
                    display: true,
                    text: "Comparison of Energy Production and Consumption (MW)",
                  },
                },
              }}
            />
          </div>
          <p className="text-gray-700 mt-4">
            This chart compares the energy produced by each source
            with the overall consumption in the city. It highlights
            where production meets demand and where there may be
            shortfalls or surpluses. Such insights help city
            planners optimize energy distribution, balance the grid,
            and identify opportunities for efficiency improvements.
          </p>
        </div>

        {/* Energy Imports and Exports Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="text-xl font-semibold mb-2">
            Energy Imports and Exports
          </h4>
          <div className={isMobile ? "relative h-64" : ""}>
            <Bar
              data={importsExportsData}
              options={{
                responsive: true,
                maintainAspectRatio: isMobile ? false : true,
                plugins: {
                  legend: { position: "top" },
                  title: {
                    display: true,
                    text: "Energy Imports and Exports (MW)",
                  },
                },
              }}
            />
          </div>
          <p className="text-gray-700 mt-4">
            This chart illustrates the flow of energy into and out
            of the city. Monitoring energy imports and exports is
            essential for understanding the city's reliance on
            external sources, assessing its surplus capacity, and
            strategizing for energy independence. Detailed analysis
            of these trends can inform economic and infrastructure
            planning.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Energy;
