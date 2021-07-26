import React from "react";
import Inicio from "../screens/Inicio";
import Anime from "../screens/Anime";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNavigation";
import CharacterAnime from "../screens/CharacterAnime";

const Stack = createStackNavigator();

const StackNavigate = () =>{
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab"
      screenOptions={{headerShown: false}}>
        <Stack.Screen
            name= "Tab"
            component={TabNav}
        />
        <Stack.Screen
          name="Home"
          component={Inicio}
          initialParams={{ idAnime: null }}
        />
        <Stack.Screen name="Anime" component={Anime} />
        <Stack.Screen
          name="Character"
          component={CharacterAnime}
          initialParams={{ idAnimeCharacter: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
};
export default StackNavigate;