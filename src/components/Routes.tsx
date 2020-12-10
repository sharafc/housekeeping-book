import React, { ReactElement, useContext } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Transaction from "../pages/Transaction";
import { AuthContext } from './App';
import About from '../pages/About';

function Routes(): ReactElement {
    const context = useContext(AuthContext);
    const isLoggedIn = context.store.loggedIn;

    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={isLoggedIn ? Dashboard : Home} />
            <Route path="/new-transaction" component={isLoggedIn ? Transaction : Home} />
            <Route path="/about" component={About} />
            <Route path="/" exact>
                <Redirect to="/home" />
            </Route>
            <Route path="/*" component={NotFound} />
        </Switch>
    );
}

export default Routes;
