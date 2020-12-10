import React, { ReactElement } from "react";
import { Box, Button, Nav, Sidebar } from "grommet";
import { AddCircle, Help, Projects } from "grommet-icons";
import { useHistory } from "react-router-dom";

function SideBar(): ReactElement {
    const history = useHistory();

    return (
        <Box elevation="medium">
            <Sidebar
                background="brand"
                header={<Button hoverIndicator icon={<Projects />} onClick={() => history.push("/dashboard")} />}
                footer={<Button icon={<Help />} hoverIndicator onClick={() => history.push("/about")} />}
            >
                <Nav gap="small">
                    <Button icon={<AddCircle />} hoverIndicator onClick={() => history.push("/new-transaction")} />
                </Nav>
            </Sidebar>
        </Box>
    );
}

export default SideBar;
