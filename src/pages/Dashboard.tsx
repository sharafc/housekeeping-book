import React, { ReactElement, useContext, useEffect, useState } from "react";
import { fetchExpenses } from "../utilities/graphql";
import { Doughnut, Line } from "react-chartjs-2";
import Table from "../components/Table/Table";
import { Heading, Card, CardBody, CardHeader, Main, Anchor } from "grommet";
import { ExpensesContext } from "../components/App";
import Expense from "../types/Expense";
import { dataToLineChart, dataToPieChart } from "../utilities/dataConverter";
import LoadingSpinner from "../partials/LoadingSpinner";
import { FormNext, FormPrevious } from "grommet-icons";

function Dashboard(): ReactElement {
    const { dispatch, store } = useContext(ExpensesContext);
    const [data, setData] = useState<Expense[]>();
    const [pieData, setPieData] = useState<string>("");
    const [lineData, setLineData] = useState<string>("");
    const [monthFilter, setMonthFilter] = useState<number>(new Date().getMonth());

    const changeMonthToPrevious = () => {
        setMonthFilter(monthFilter - 1);
    }

    const changeMonthToNext = () => {
        setMonthFilter(monthFilter + 1);
    }

    useEffect(() => {
        if (store.expenses.length > 0) {
            const tableData = store.expenses.filter((item) => new Date(item.created_at).getMonth() === monthFilter);
            setPieData(dataToPieChart(tableData));
            setLineData(dataToLineChart(tableData, monthFilter));
            setData(tableData);
        }
    }, [store.expenses, monthFilter])

    useEffect(() => {
        if (store.expenses.length === 0) {
            fetchExpenses((tableData) => {
                dispatch({ type: "primeStore", payload: tableData });
            });
        }
    }, [dispatch, store.expenses]);

    if (!data) {return <LoadingSpinner/>}

    return (
        <>
            <Main direction="row" flex pad="medium" wrap>
                <Card width="large" background="light-1" margin="small">
                    <CardHeader pad="small" justify="center" background="light-2">
                        <Heading level="3" margin="small">
                            <Anchor icon={<FormPrevious />} onClick={changeMonthToPrevious} />
                            Einnahmen / Ausgaben
                            <Anchor icon={<FormNext />} onClick={changeMonthToNext} />
                        </Heading>
                    </CardHeader>
                    <CardBody pad="small">{lineData ? <Line data={lineData} /> : ""}</CardBody>
                </Card>

                <Card width="large" background="light-1" margin="small">
                    <CardHeader pad="small" justify="center" background="light-2">
                        <Heading level="3" margin="small">
                            <Anchor icon={<FormPrevious />} onClick={changeMonthToPrevious} />
                            Ausgabe in Kategorien
                            <Anchor icon={<FormNext />} onClick={changeMonthToNext} />
                        </Heading>
                    </CardHeader>
                    <CardBody pad="small">{pieData ? <Doughnut data={pieData} /> : ""}</CardBody>
                </Card>

                <Card width="xxlarge" background="light-1" margin="small">
                    <CardHeader pad="small" justify="center" background="light-2">
                        <Heading level="3" margin="small">
                            <Anchor icon={<FormPrevious />} onClick={changeMonthToPrevious} />
                            Letzte Transaktionen
                            <Anchor icon={<FormNext />} onClick={changeMonthToNext} />
                        </Heading>
                    </CardHeader>
                    <CardBody pad="small">{data ? <Table data={data} /> : ""}</CardBody>
                </Card>
            </Main>
        </>
    );
}

export default Dashboard;
