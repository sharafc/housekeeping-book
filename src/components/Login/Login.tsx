import { Box, Heading, Form, FormField, TextInput, Text, Button, Paragraph, Image } from 'grommet';
import React, { ReactElement, SyntheticEvent, useContext, useState } from 'react'
import logo from "../../statics/image/earn.svg"
import { AuthContext } from '../App';

function Login(): ReactElement {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState<string | undefined>(undefined);
    const context = useContext(AuthContext);
    const dispatch = context.dispatch;

    const resetForm = () => {
        setUser("");
        setPassword("");
        setMessage("");
    }

    const loginUser = (event: SyntheticEvent) => {
        event.preventDefault();
        if (user === "admin" && password === "admin") {
            dispatch({ type: "loginUser", payload: true });
            document.location.href="/dashboard";
        } else {
            setMessage("Login failed, please check username and password.");
        }
    }

    return (
        <Box
            flex
            justify="center"
            margin="auto"
            width="large"
            background="background-contrast"
            pad={{ left: "large", right: "large", bottom: "small" }}
        >
            <Image src={logo} width="" />
            <Heading level="1" margin={{ top: "1rem" }}>
                Login
            </Heading>
            <Paragraph>To continue please verify your identity.</Paragraph>
            <Form onReset={resetForm} onSubmit={(e) => loginUser(e)}>
                {message && (
                    <Box pad={{ horizontal: "small" }}>
                        <Text color="status-error">{message}</Text>
                    </Box>
                )}

                <FormField name="username" htmlFor="username" label="Username">
                    <TextInput
                        type="text"
                        id="username"
                        name="username"
                        value={user}
                        required
                        onChange={(e) => setUser(e.target.value)}
                    />
                </FormField>
                <FormField name="password" htmlFor="password" label="Password">
                    <TextInput value={password} type="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                </FormField>
                <Box gap="medium" direction="row" justify="end">
                    <Button type="reset" label="Cancel" />
                    <Button type="submit" primary label="Login" />
                </Box>
            </Form>
        </Box>
    );
}

export default Login;
