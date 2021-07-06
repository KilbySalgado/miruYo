import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Inicio from '../screens/Inicio';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

const TabNav= ()=> {
return (
    <NavigationContainer>
    <View style = {styles.header}><Text style={styles.title}>miruYo</Text></View>
    <Tab.Navigator tabBarOptions={{
        labelStyle: {color: "#ffffff", fontSize: 12, textAlign: 'center', fontWeight: 'bold'},
        style:{backgroundColor:"#ff5733",}}} tabBarPosition="top">
        <Tab.Screen name = "Inicio" component={Inicio}/>
    </Tab.Navigator>
    </NavigationContainer>
);
}
const styles = StyleSheet.create({
header: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    backgroundColor: '#ff5733'
},
title: {
    color: '#ffffff',
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 35,
    fontSize: 24,
  }
});

export default TabNav;