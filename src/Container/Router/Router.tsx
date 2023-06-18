import React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../../Pages/Login/Login";
import { Button, Stack, Box } from "native-base";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles, { background } from "./Router.styles";
import { navTheme } from "../../Constant/theme";

const StackNav = createStackNavigator();

const Router = () => {
    return (
        <Box bg={background} style={styles.container} >
            <NavigationContainer theme={navTheme}>
                <StackNav.Navigator initialRouteName="Login">
                    <StackNav.Screen
                        name="Login"
                        component={Login}
                        options={{
                            title: 'Login',
                            headerRight: () => (
                                <Ionicons name="settings" size={24} color="white" />
                            ),
                        }}
                    />
                </StackNav.Navigator>
            </NavigationContainer>
        </Box>
    )
}

export default Router;