import { Box, Heading, Image, Main, Paragraph } from 'grommet';
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import logo from "../statics/image/finance.svg";

function NotFound(): ReactElement {
    return (
        <Main flex direction="row" pad="large" justify="center" gap="2em">
            <Image src={logo} width="15%" />
            <Box justify="center">
                <Heading level="1">OOOPPSS!!</Heading>
                <Paragraph>Something unexpected happened</Paragraph>
                <Paragraph>
                    Please return to the <Link to="/home">homepage</Link>
                </Paragraph>
            </Box>
        </Main>
    );
}

export default NotFound;
