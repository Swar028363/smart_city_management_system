import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";

function App() {
    return (
        <Router>
            <div className="flex flex-col justify-between">
                <Header />
                <div className="app-container">
                    <div className="content">
                        <Routes />
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
