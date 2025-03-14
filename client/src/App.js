import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";

function App() {
    return (
        <div className="flex flex-col justify-between">
            <Header />
            <div className="app-container">
                <div className="content">
                    <Routes />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
