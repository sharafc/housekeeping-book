import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import "./App.scss";
import { Box, Grommet } from "grommet";
import { theme } from "../themes/theme";

function App(): ReactElement {
    return (
        <Grommet theme={theme} themeMode="dark">
            <Box fill background="dark">
                <Router>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/">
                            <Redirect to="/home" />
                        </Route>
                    </Switch>
                </Router>
            </Box>
        </Grommet>
    );
}

export default App;
