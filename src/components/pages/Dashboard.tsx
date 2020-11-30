import React, { ReactElement, useEffect } from "react";
import { fetchExpenses } from "../../utilities/graphql";
import logo from "../../statics/image/earn.svg";

function Dashboard(): ReactElement {

    useEffect(() => {
        //fetchExpenses();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Working hard on Version 1 of the Household Account Book</p>
            </header>
        </div>
    );
}

export default Dashboard;
