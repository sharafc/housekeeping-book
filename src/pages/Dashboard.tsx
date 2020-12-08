import React, { ReactElement, useContext, useEffect, useState } from "react";
import { getFakeData } from "../utilities/graphql";
import { Doughnut, Line } from "react-chartjs-2";
import Table from "../components/Table/Table";
import chart_data from "../shared/chartdata.json";
import expense_income from "../shared/expense_income.json";
import { Box, Heading, Card, CardBody, CardHeader, Main } from "grommet";
import AddButton from "../partials/AddButton/AddButton";
import { ExpensesContext } from "../components/App";
import Expense from "../types/Expense";
import { dataToPieChart } from "../utilities/dataConverter";

function Dashboard(): ReactElement {
    const {dispatch, store} = useContext(ExpensesContext);
    const [data, setData] = useState<Expense[]>();
    const [pieData, setPieData] = useState<string>("");


    useEffect(() => {
        // Faking DB access with local json and priming store
        const tableData = getFakeData();
        dispatch({ type: "primeStore", payload: tableData });
        setData(tableData);
        setPieData(dataToPieChart(tableData));
    }, [dispatch]);

    return (
        <>
            <Main direction="row-reverse" flex-wrap="wrap" flex>
                <Box flex direction="row-responsive" pad="medium" style={{ flexWrap: "wrap", gap: "1rem" }}>
                    <Card width="large" background="light-1">
                        <CardHeader pad="small" justify="center" background="light-2">
                            <Heading level="3" margin="small">
                                Einnahmen / Ausgaben
                            </Heading>
                        </CardHeader>
                        <CardBody pad="small">{expense_income ? <Line data={expense_income} /> : ""}</CardBody>
                    </Card>

                    <Card width="large" background="light-1">
                        <CardHeader pad="small" justify="center" background="light-2">
                            <Heading level="3" margin="small">
                                Ausgabe in Kategorien
                            </Heading>
                        </CardHeader>
                        <CardBody pad="small">{chart_data ? <Doughnut data={chart_data} /> : ""}</CardBody>
                    </Card>

                    <Card width="xxlarge" background="light-1">
                        <CardHeader pad="small" justify="center" background="light-2">
                            <Heading level="3" margin="small">
                                Letzte Transaktionen
                            </Heading>
                        </CardHeader>
                        <CardBody pad="small">
                            {
                                /* check needed since useEffect can deliver the data late  */
                                data ? <Table data={data} /> : ""
                            }
                        </CardBody>
                    </Card>
                </Box>
            </Main>

            <AddButton />
        </>
    );
}

export default Dashboard;
