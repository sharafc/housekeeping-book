import React, { ReactElement, useEffect, useState } from "react";
import { getFakeData } from "../../utilities/graphql";
import { Doughnut } from "react-chartjs-2";
import Table from "../Table";
import logo from "../../statics/image/earn.svg";

import chart_data from "../../shared/chartdata.json"
import Expense from "../../types/Expense";


function Dashboard(): ReactElement {
    const [data, setData] = useState<Expense[]>();

    useEffect(() => {
        // Faking DB access with local json
        setData(getFakeData());
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Working hard on Version 1 of the Household Account Book</p>

                <div>
                    <Doughnut data={chart_data} />
                </div>
               {
                   /* check needed since useEffect can deliver the data late  */
                   data ? <Table data={data} /> : ""
               }
               
            </header>
        </div>
    );
}

export default Dashboard;
