import React, { ReactElement, useContext } from "react";
import { Box, Button, Nav, Sidebar } from "grommet";
import { AddCircle, Help, Projects, Refresh } from "grommet-icons";
import { useHistory } from "react-router-dom";
import { ExpensesContext } from "../components/App";
import { fetchExpenses } from "../utilities/graphql";

function SideBar(): ReactElement {
    const history = useHistory();
    const { dispatch } = useContext(ExpensesContext);

    const refreshStore = () => {
        fetchExpenses((tableData) => {
            dispatch({ type: "primeStore", payload: tableData });
            history.push("/dashboard");
        });
    }

    return (
        <Box elevation="medium">
            <Sidebar
                background="brand"
                header={<Button hoverIndicator icon={<Projects />} onClick={() => history.push("/dashboard")} />}
                footer={<Button icon={<Help />} hoverIndicator onClick={() => history.push("/about")} />}
            >
                <Nav gap="small">
                    <Button icon={<AddCircle />} hoverIndicator onClick={() => history.push("/new-transaction")} />
                    <Button icon={<Refresh />} hoverIndicator onClick={refreshStore} />
                </Nav>
            </Sidebar>
        </Box>
    );
}

export default SideBar;
