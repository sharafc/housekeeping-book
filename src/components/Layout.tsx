import { Box } from "grommet";
import React, { ReactElement, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../partials/Header";
import SideBar from "../partials/SideBar";
import { AuthContext } from "./App";

interface Props {
    children: ReactElement;
}

function Layout(props: Props): ReactElement {
    const context = useContext(AuthContext);
    return (
        <Router>
            <Header />
            <Box fill flex direction="row-reverse" className="wrapper">
                {props.children}
                {context.store.loggedIn ? <SideBar /> : ""}
            </Box>
        </Router>
    );
}

export default Layout;
