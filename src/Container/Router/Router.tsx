import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../../Pages/Login/Login";
import { Button, Icon } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


const Stack = createStackNavigator();

const Router = () => {
    console.log("******Router")
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Overview',
                        headerRight: () => (
                            <Ionicons name="settings" size={24} color="black" />
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;