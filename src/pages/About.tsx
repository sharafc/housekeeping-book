import React, { ReactElement } from 'react'
import { Anchor, Heading, Main, Paragraph } from 'grommet'

function About(): ReactElement {
    return (
        <Main pad="medium">
            <Heading level="1">About</Heading>
            <Paragraph>
                Housekeeping Book from{" "}
                <Anchor href="https://twitter.com/sharafchris" target="_blank">
                    Christian Sharaf
                </Anchor>
            .</Paragraph>
            <Paragraph>Private project to keep track of income and expenses.</Paragraph>
            <Paragraph>This is my first <Anchor href="https://reactjs.org" target="_blank">ReactJS</Anchor> project.</Paragraph>
        </Main>
    );
}

export default About
