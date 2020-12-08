import React, { ReactElement } from "react";
import { Box, Button, Nav, Sidebar } from "grommet";
import { Clock, Help, Projects } from "grommet-icons";

function SideBar(): ReactElement {
    return (
        <Box fill="vertical" elevation="medium">
            <Sidebar
                background="brand"
                header={<Button icon={<Help />} hoverIndicator />}
            >
                <Nav gap="small">
                    <Button icon={<Projects />} hoverIndicator />
                    <Button icon={<Clock />} hoverIndicator />
                </Nav>
            </Sidebar>
        </Box>
    );
}

export default SideBar;
