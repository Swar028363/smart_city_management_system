import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside
            style={{ width: "200px", background: "#f4f4f4", padding: "20px" }}
        >
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                    <Link to="/traffic">Traffic</Link>
                </li>
                <li>
                    <Link to="/public-transport">Public Transport</Link>
                </li>
                <li>
                    <Link to="/energy">Energy</Link>
                </li>
                <li>
                    <Link to="/water">Water</Link>
                </li>
                <li>
                    <Link to="/waste">Waste</Link>
                </li>
                <li>
                    <Link to="/security">Security</Link>
                </li>
                <li>
                    <Link to="/healthcare">Healthcare</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
