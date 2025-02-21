import React from "react";
import { Switch, Route } from "react-router-dom";

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
import Healthcare from "./pages/Healthcare";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/traffic" component={Traffic} />
            <Route path="/public-transport" component={PublicTransport} />
            <Route path="/energy" component={Energy} />
            <Route path="/water" component={Water} />
            <Route path="/waste" component={Waste} />
            <Route path="/security" component={Security} />
            <Route path="/healthcare" component={Healthcare} />
        </Switch>
    );
};

export default Routes;
