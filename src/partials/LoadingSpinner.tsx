import { Box, Text } from 'grommet';
import React, { ReactElement } from 'react'

function LoadingSpinner(): ReactElement {
    return (
        <Box
            fill
            align="center"
            justify="center"
            direction="row"
            pad="large"
            gap="small"
            background={{ color: "background-front", opacity: "strong" }}
        >
            <Box
                direction="row"
                border={[
                    { side: "all", color: "transparent", size: "medium" },
                    { side: "horizontal", color: "brand", size: "medium" },
                ]}
                pad="small"
                round="full"
                animation="rotateRight"
            />
            <Text weight="bold">Loading ...</Text>
        </Box>
    );
}

export default LoadingSpinner;