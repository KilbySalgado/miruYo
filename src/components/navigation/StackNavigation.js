import React from "react";
import Inicio from "../screens/Inicio";
import Anime from "../screens/Anime";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNavigation";
import CharacterAnime from "../screens/CharacterAnime";
import Signin from "../screens/Signin";

const Stack = createStackNavigator();

const StackNavigate = () =>{
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen
            name= "Tab"
            component={TabNav}
            options={{ title: '', headerStyle: {backgroundColor: "#1d2d50"},
            headerTitleStyle: {color: "#fff", fontWeight: "bold"}}}
        />
        <Stack.Screen
          name="Home"
          component={Inicio}
          initialParams={{ idAnime: null }}
        />
        <Stack.Screen
        name="Anime"
        component={Anime}
        options={{ title: 'Anime Info',
          headerStyle: {backgroundColor: "#1d2d50"},
          headerTitleStyle: {color: "#fff", fontWeight: "bold"}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
};
export default StackNavigate;