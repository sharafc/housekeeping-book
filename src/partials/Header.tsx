import { Menu, Box, CheckBox, Avatar, Text } from "grommet";
import { Moon, Sun, FormDown } from "grommet-icons";
import React, { ReactElement, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ThemeMode } from "../types/ThemeStoreProperties";
import { AuthContext, ThemeContext } from "../components/App";
import headerlogo from "../statics/image/finance.svg";

// Custom ReactElement
// Takes any children of AppBar -> any is needed here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppBar = (props: any): ReactElement => {
    return (
        <Box
            tag="header"
            direction="row-reverse"
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

function Header(): ReactElement {
    const [checked, setChecked] = useState(true);
    const history = useHistory();

    const themecontext = useContext(ThemeContext);
    const dispatch = themecontext.dispatch;

    const changeTheme = () => {
        let theme: ThemeMode;
        checked ? (theme = "light") : (theme = "dark");
        dispatch({ type: "changeTheme", payload: theme });
        setChecked(!checked);
    };

    const authcontext = useContext(AuthContext);
    const authdispatch = authcontext.dispatch;

    const logOut = () => {
        authdispatch({ type: "logoutUser", payload: false });
    };

    if (authcontext.store.loggedIn === false) {
        history.push(`./home`);
    }

    return (
        <AppBar>
            <Menu
                dropAlign={{ right: "right", top: "top" }}
                items={[
                    {
                        label: (
                            <Box direction="row" align="center" pad="medium">
                                <CheckBox toggle checked={checked} onChange={changeTheme} />
                                {checked ? <Moon size="medium" /> : <Sun size="medium" />}
                            </Box>
                        ),
                    },
                    !authcontext.store.loggedIn ? {} :
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
    );
}

export default Header;
