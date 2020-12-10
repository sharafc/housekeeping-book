import React, { createContext, ReactElement, useReducer } from "react";
import Routes from "./Routes";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes/grommet";
import { themeStore, reducer } from "../stores/themeStore";
import { ThemeStoreProperties } from "../types/ThemeStoreProperties";
import { authStore, reducer as authReducer } from "../stores/authStore";
import { AuthStoreProperties } from "../types/AuthStoreProperties";
import { ExpensesStoreProperties } from "../types/ExpensesStoreProperties";
import Layout from "./Layout";
import { expensesStore, reducer as expensesReducer } from "../stores/expensesStore";

/** ThemeStore ThemeContext */
export const ThemeContext = createContext({} as ThemeStoreProperties);
/** Authentification Context */
export const AuthContext = createContext({} as AuthStoreProperties);
/** Expenses Context */
export const ExpensesContext = createContext({} as ExpensesStoreProperties);

function App(): ReactElement {
    const [store, dispatch] = useReducer(reducer, themeStore);
    const [astore, authDispatch] = useReducer(authReducer, authStore);
    const [estore, expensesDispatch] = useReducer(expensesReducer, expensesStore);

    return (
        <ThemeContext.Provider value={{ store, dispatch }}>
            <AuthContext.Provider value={{ store: astore, dispatch: authDispatch }}>
                <ExpensesContext.Provider value={{ store: estore, dispatch: expensesDispatch }}>
                    <Grommet
                        cssVars={true}
                        theme={grommet}
                        themeMode={store.themeMode}
                    >
                        <Layout>
                            <Routes />
                        </Layout>
                    </Grommet>
                </ExpensesContext.Provider>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
