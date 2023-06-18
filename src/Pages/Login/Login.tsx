import { Button, View, Stack, Input } from "native-base";
import { StyleSheet } from 'react-native';
import React from "react";
import { Text,  } from "react-native";
import styles from './Login.style';

const Login = () => {
    return (
        <Stack style={styles.container} space={5} w="75%" maxW="300px" mx="auto">
            <Text style={{ color: "#ffffff"}}>
                Login
            </Text>
            <Input  placeholder="Username" size="lg" />
            <Input placeholder="Password" size="lg" />
            <Button variant="ghost">
                <Text style={{ color: "#ffffff"}}>
                    Dont have an account? Register here...
                </Text>
            </Button>
        </Stack>
    )
}

export default Login;