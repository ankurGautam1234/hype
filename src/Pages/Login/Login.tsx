import { Button, View, Stack } from "native-base";
import { StyleSheet } from 'react-native';
import React from "react";
import { Text,  } from "react-native";
import styles from './Login.style';

const Login = () => {
    return (
        <Stack style={styles.container}>
            <Button variant="outline">
                Lgoin withGoogle
            </Button>
            <Button variant="ghost">
                <Text style={{ color: "#ffffff"}}>
                    Dont have an account? Register here...
                </Text>
            </Button>
        </Stack>
    )
}

export default Login;