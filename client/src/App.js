import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Routes from "./routes";


function App() {
    return (
        <Router>
            <Header />
            <div className="app-container" style={{ display: "flex" }}>
                <Sidebar />
                <div className="content" style={{ flex: 1, padding: "20px" }}>
                    <Routes />
                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
