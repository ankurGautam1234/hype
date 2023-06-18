import React from "react";
import { Button, Stack, Input, Text } from "native-base";

import styles from './Login.style';

const Login = () => {
    return (
        <Stack style={styles.container} space={5} w="75%" maxW="300px" mx="auto">
            <Input  placeholder="Username" size="lg" />
            <Input placeholder="Password" size="lg" />
            <Button size="lg">
                Login
            </Button>
            <Button variant="ghost">
                <Text>
                    Dont have an account? Register here...
                </Text>
            </Button>
        </Stack>
    )
}

export default Login;