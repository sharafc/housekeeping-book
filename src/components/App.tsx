import React, { createContext, ReactElement, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Box, Grommet } from "grommet";
import { theme } from "../themes/theme";
import { themeStore, reducer } from "../stores/themeStore";
import { ThemeStoreProperties } from "../types/ThemeStoreProperties";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import "./App.scss";

/** ThemeStore Context */
export const Context = createContext({} as ThemeStoreProperties);

function App(): ReactElement {
    const [store, dispatch] = useReducer(reducer, themeStore);

    return (
        <Context.Provider value={{ store, dispatch }}>
            <Grommet theme={theme} themeMode={store.themeMode} style={{ minHeight: "100vh"}}>
                <Box fill>
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
        </Context.Provider>
    );
}

export default App;
