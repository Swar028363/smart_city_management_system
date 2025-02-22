import React from "react";

function PublicTransport() {
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-8">
            <h2 className="text-3xl font-bold mb-4">Public Transport</h2>
            <p className="text-lg">
                Access and manage public transportation schedules and updates.
            </p>

            {/* Overview Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">Overview</h3>
                <p className="text-gray-700">
                    Our public transport system is the lifeline of the city,
                    offering a network of buses, trams, and metro services to
                    ensure efficient and sustainable mobility. With integrated
                    real-time tracking and dynamic scheduling, we strive to
                    provide a seamless travel experience for all commuters.
                </p>
            </section>

            {/* Bus Routes & Schedules Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">
                    Bus Routes & Schedules
                </h3>
                <p className="text-gray-700">
                    Explore the latest bus routes and schedules updated in
                    real-time. Our system provides comprehensive information on
                    routes, stop timings, and any delays or cancellations,
                    ensuring you never miss your ride.
                </p>
                <img
                    src="https://via.placeholder.com/600x300?text=Bus+Routes+Map"
                    alt="Bus Routes Map"
                    className="w-full rounded shadow"
                />
            </section>

            {/* Metro & Tram Services Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">
                    Metro & Tram Services
                </h3>
                <p className="text-gray-700">
                    Discover our efficient metro and tram services that connect
                    key areas of the city. Check live updates, estimated arrival
                    times, and station details to make your commute as smooth as
                    possible.
                </p>
                <img
                    src="https://via.placeholder.com/600x300?text=Metro+Tram+Map"
                    alt="Metro and Tram Map"
                    className="w-full rounded shadow"
                />
            </section>

            {/* Real-Time Updates Section */}
            <section className="space-y-4">
                <h3 className="text-2xl font-semibold">Real-Time Updates</h3>
                <p className="text-gray-700">
                    Stay informed with real-time updates on public transport
                    services. Our live tracking system and notifications ensure
                    that you are always aware of any changes, delays, or
                    emergencies affecting your daily commute.
                </p>
            </section>
        </div>
    );
}

export default PublicTransport;
