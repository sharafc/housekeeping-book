import React, { createContext, ReactElement, useReducer } from "react";
import Routes from "./Routes";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes/grommet";
import { themeStore, reducer } from "../stores/themeStore";
import { ThemeStoreProperties } from "../types/ThemeStoreProperties";
import { authStore, reducer as authReducer } from "../stores/authStore";
import { AuthStoreProperties } from "../types/AuthStoreProperties";

/** ThemeStore ThemeContext */
export const ThemeContext = createContext({} as ThemeStoreProperties);
/** Authentification Context */
export const AuthContext = createContext({} as AuthStoreProperties);

function App(): ReactElement {
    const [store, dispatch] = useReducer(reducer, themeStore);
    const [astore, authDispatch] = useReducer(authReducer, authStore);

    return (
        <ThemeContext.Provider value={{ store, dispatch }}>
            <AuthContext.Provider value={{ store: astore, dispatch: authDispatch }}>
                <Grommet cssVars={true} theme={grommet} themeMode={store.themeMode} style={{ minHeight: "100vh" }}>
                    <Routes />
                </Grommet>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
