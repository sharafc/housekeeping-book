import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import "./App.scss";

function App(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
