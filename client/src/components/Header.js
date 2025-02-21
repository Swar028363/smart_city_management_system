import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header
            style={{ background: "#333", color: "#fff", padding: "10px 20px" }}
        >
            <h1>Smart City Management System</h1>
            <nav>
                <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>
                    Home
                </Link>
                <Link
                    to="/about"
                    style={{ marginRight: "10px", color: "#fff" }}
                >
                    About
                </Link>
                <Link
                    to="/dashboard"
                    style={{ marginRight: "10px", color: "#fff" }}
                >
                    Dashboard
                </Link>
            </nav>
        </header>
    );
}

export default Header;
