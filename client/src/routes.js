import React from "react";
import { Routes as R, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Traffic from "./pages/Traffic";
import PublicTransport from "./pages/PublicTransport";
import Energy from "./pages/Energy";
import Water from "./pages/Water";
import Waste from "./pages/Waste";
import Security from "./pages/Security";
import SecurityForm from "./pages/SecurityForm";
import Healthcare from "./pages/Healthcare";

const Routes = () => {
    return (
        <R>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/public-transport" element={<PublicTransport />} />
            <Route path="/energy" element={<Energy />} />
            <Route path="/water" element={<Water />} />
            <Route path="/waste" element={<Waste />} />
            <Route path="/security" element={<Security />} />
            <Route path="/securityform" element={<SecurityForm />} />
            <Route path="/healthcare" element={<Healthcare />} />
        </R>
    );
};

export default Routes;
