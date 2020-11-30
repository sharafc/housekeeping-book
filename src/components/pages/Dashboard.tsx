import React, { ReactElement, useEffect } from "react";
import { AXIOS_HASURA_GRAPHQL, GET_EXPENSES_QUERY } from "../../infrastructure/axios";
import logo from "../../statics/image/earn.svg";

function Dashboard(): ReactElement {
    const fetchExpenses = () => {
        AXIOS_HASURA_GRAPHQL
        .post("", { query: GET_EXPENSES_QUERY })
        .then((result) => console.log(result.data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchExpenses();
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
