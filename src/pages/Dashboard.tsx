import React, { ReactElement, useEffect, useState } from "react";
import { getFakeData } from "../utilities/graphql";
import { Doughnut } from "react-chartjs-2";
import Table from "../components/Table/Table";
import logo from "../statics/image/earn.svg";
import headerlogo from "../statics/image/finance.svg";

import chart_data from "../shared/chartdata.json";
import Expense from "../types/Expense";
import { Box, Button, Collapsible, Heading, ResponsiveContext, Layer, Menu } from "grommet";
import { FormClose, Home, Notification } from "grommet-icons";

const AppBar = (props: any): ReactElement => {
    return (
        <Box
            tag="header"
            direction="row"
            align="center"
            justify="between"
            background="brand"
            pad={{ left: "medium", right: "small", vertical: "small" }}
            elevation="medium"
            style={{ zIndex: 1 }}
            {...props}
        />
    );
};

function Dashboard(): ReactElement {
    const [data, setData] = useState<Expense[]>();
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        // Faking DB access with local json
        setData(getFakeData());
    }, []);

    return (
        <>
            <AppBar>
                <Button icon={<Home />} hoverIndicator />

                <Heading level="3" margin="none">
                    <img src={headerlogo} alt="logo" width="50" border-radius="5" background-color="white" />
                </Heading>
                <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} hoverIndicator />
                <Menu label="account" items={[{ label: "logout" }]} />
            </AppBar>

            <Box direction="row-reverse" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" justify="center">
                    <img src={logo} alt="logo" />
                    <p>Working hard on Version 1 of the Household Account Book</p>

                    <div>
                        <Doughnut data={chart_data} />
                    </div>
                    {
                        /* check needed since useEffect can deliver the data late  */
                        data ? <Table data={data} /> : ""
                    }
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
            </Box>
        </>
    );
}

export default Dashboard;
