import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

function Routes(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Routes;
