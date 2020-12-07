import Login from "../components/Login";
import React, { ReactElement, useContext} from "react";

import { AuthContext } from "../components/App";
import { Redirect } from "react-router-dom";

function Home(): ReactElement {
    const context = useContext(AuthContext);
    const loggedIn = context.store.loggedIn;

    return (
        <>
            {
                loggedIn === true ?
                    <Redirect to="/dashboard" />
                : <Login />
            }
        </>
    );
}

export default Home;
