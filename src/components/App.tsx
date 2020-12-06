import React, { createContext, ReactElement, useReducer } from "react";
import Routes from "./Routes";
import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes/grommet";
import { themeStore, reducer } from "../stores/themeStore";
import { ThemeStoreProperties } from "../types/ThemeStoreProperties";

/** ThemeStore Context */
export const Context = createContext({} as ThemeStoreProperties);

function App(): ReactElement {
    const [store, dispatch] = useReducer(reducer, themeStore);

    return (
        <Context.Provider value={{ store, dispatch }}>
            <Grommet cssVars={true} theme={grommet} themeMode={store.themeMode} style={{ minHeight: "100vh" }}>
                <Routes />
            </Grommet>
        </Context.Provider>
    );
}

export default App;
