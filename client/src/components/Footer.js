import React from "react";

function Footer() {
    return (
        <footer
            style={{
                background: "#333",
                color: "#fff",
                padding: "10px 20px",
                textAlign: "center",
            }}
        >
            <p>
                &copy; {new Date().getFullYear()} Smart City Management System.
                All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
