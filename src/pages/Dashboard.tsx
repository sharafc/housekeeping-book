import React, { ReactElement, useContext, useEffect, useState } from "react";
import { getFakeData } from "../utilities/graphql";
import { Doughnut, Line } from "react-chartjs-2";
import Table from "../components/Table/Table";
import headerlogo from "../statics/image/finance.svg";
import chart_data from "../shared/chartdata.json";
import expense_income from "../shared/expense_income.json";
import Expense from "../types/Expense";
import {
    Box,
    Button,
    Collapsible,
    Text,
    ResponsiveContext,
    Layer,
    Menu,
    Avatar,
    CheckBox,
    Heading,
    Card,
    CardBody,
    CardHeader,
    Main,
} from "grommet";
import { FormClose, AppsRounded, FormDown, Sun, Moon } from "grommet-icons";
import { AuthContext, ThemeContext } from "../components/App";
import { ThemeMode } from "../types/ThemeStoreProperties";

// Custom ReactElement
// Takes any children of AppBar -> any is needed here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppBar = (props: any): ReactElement => {
    return (
        <Box
            tag="header"
            direction="row"
            align="center"
            justify="between"
            background="brand"
            pad={{ left: "medium", right: "medium", vertical: "small" }}
            elevation="medium"
            style={{ zIndex: 1 }}
            {...props}
        />
    );
};

function Dashboard(): ReactElement {
    const [data, setData] = useState<Expense[]>();
    const [showSidebar, setShowSidebar] = useState(false);
    const [checked, setChecked] = useState(true);
    const context = useContext(ThemeContext);
    const dispatch = context.dispatch;

    const changeTheme = () => {
        let theme: ThemeMode;
        checked ? theme = "light": theme = "dark";
        dispatch({ type: "changeTheme", payload: theme})
        setChecked(!checked);
    }

    const authcontext = useContext(AuthContext);
    const authdispatch = authcontext.dispatch;

    const logOut = () => {
        authdispatch({ type: "logoutUser", payload: false });
    }

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    useEffect(() => {
        // Faking DB access with local json
        setData(getFakeData());
    }, []);

    if (authcontext.store.loggedIn === false) {
        document.location.href = "/home";
    }


    return (
        <>
            <AppBar>
                <Button icon={<AppsRounded />} onClick={toggleSidebar} hoverIndicator />

                <Menu dropAlign={{right: "right", top: "top"}}
                    items={[
                        {
                            label: <Box direction="row" align="center" pad="medium">
                                        <CheckBox toggle checked={checked} onChange={changeTheme} />
                                        {checked ? <Moon size="medium" /> : <Sun size="medium" />}
                                    </Box>,
                        },
                        {
                            label: <Box alignSelf="center">Logout</Box>,
                            onClick: () => {
                                logOut();
                            },
                            icon: (
                                <Box pad="small">
                                    <Avatar src={headerlogo} size="small" round="xsmall" />
                                </Box>
                            ),
                        },
                    ]}
                >
                    <Box direction="row" gap="small" pad="medium">
                        <FormDown />
                        <Text>Options</Text>
                    </Box>
                </Menu>
            </AppBar>

            <Main direction="row-reverse" flex-wrap="wrap" flex overflow={{ horizontal: "hidden" }}>
                <Box flex direction="row-responsive" pad="medium" style={{ flexWrap: "wrap", gap: "1rem"}}>
                    <Card width="large" background="light-1">
                        <CardHeader pad="small" justify="center" background="light-2">
                            <Heading level="3" margin="small">
                                Ausgabe in Kategorien
                            </Heading>
                        </CardHeader>
                        <CardBody pad="small">{chart_data ? <Doughnut data={chart_data} /> : ""}</CardBody>
                    </Card>

                    <Card width="large" background="light-1">
                        <CardHeader pad="small" justify="center" background="light-2">
                            <Heading level="3" margin="small">
                                Ein / Ausgaben
                            </Heading>
                        </CardHeader>
                        <CardBody pad="small">{expense_income ? <Line data={expense_income} /> : ""}</CardBody>
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
                <ResponsiveContext.Consumer>
                    {(size) => (
                        <>
                            {!showSidebar || size !== "small" ? (
                                <Collapsible direction="horizontal" open={showSidebar}>
                                    <Box
                                        flex
                                        width="medium"
                                        background="light-2"
                                        elevation="small"
                                        align="center"
                                        justify="center"
                                    >
                                        sidebar
                                    </Box>
                                </Collapsible>
                            ) : (
                                <Layer>
                                    <Box background="light-2" tag="header" justify="end" align="center" direction="row">
                                        <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
                                    </Box>
                                    <Box fill background="light-2" align="center" justify="center">
                                        sidebar
                                    </Box>
                                </Layer>
                            )}
                        </>
                    )}
                </ResponsiveContext.Consumer>
            </Main>
        </>
    );
}

export default Dashboard;
