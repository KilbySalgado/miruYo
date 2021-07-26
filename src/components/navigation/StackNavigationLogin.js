import React from "react";
import Signin from "../screens/Signin";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNavigateLogin = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signin"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Signin"
                    component={Signin}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default StackNavigateLogin;