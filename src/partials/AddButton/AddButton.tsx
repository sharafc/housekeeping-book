import { Anchor, Box } from 'grommet';
import { AddCircle } from 'grommet-icons';
import React, { ReactElement } from 'react'
import styles from "./AddButton.module.scss"

function AddButton(): ReactElement {
    return (
        <Box round justify="center" align="center" overflow="hidden" className={styles.floatingButton}>
            <Anchor href="/new-transaction">
                <AddCircle size="large" />
            </Anchor>
        </Box>
    );
}

export default AddButton
