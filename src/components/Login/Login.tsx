import { Box, Heading, Form, FormField, TextInput, Button, Paragraph, Image } from 'grommet';
import React, { ReactElement, useState } from 'react'
import logo from "../../statics/image/earn.svg"

function Login(): ReactElement {
    const [value, setvalue] = useState({});
    
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
            <Paragraph>To continue please Login and verify your identity.</Paragraph>
            <Form value={value} onReset={() => setvalue({})}>
                <FormField name="email" htmlFor="email" label="eMail">
                    <TextInput type="email" id="email" name="email" required />
                </FormField>
                <FormField name="password" htmlFor="password" label="Password">
                    <TextInput type="password" id="password" required />
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
