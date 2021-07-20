import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Inicio from '../screens/Inicio';
import CharacterAnime from '../screens/CharacterAnime';
import TopAnime from '../screens/TopAnime';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const TabNav= ()=> {
return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: {color: "#ffffff", fontSize: 12, textAlign: 'center', fontWeight: 'bold'},
            style:{backgroundColor:"#ff5733",}}} tabBarPosition="top">
            <Tab.Screen name = "Inicio" component={Inicio}/>
            <Tab.Screen name = "Top" component={TopAnime}/>
        </Tab.Navigator>
);
}


export default TabNav;