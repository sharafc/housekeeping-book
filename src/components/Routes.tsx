import React, { ReactElement, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Transaction from "../pages/Transaction";
import { AuthContext } from './App';

function Routes(): ReactElement {
    const context = useContext(AuthContext);
    const isLoggedIn = context.store.loggedIn;

    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/dashboard" component={ isLoggedIn ? Dashboard : Home } />
                <Route path="/new-transaction" component={Transaction} />
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Routes;
