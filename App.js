import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './src/components/screens/Home';
import Browser from './src/components/screens/Browser';
import Character from './src/components/screens/Character';
import About from './src/components/screens/About';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <View style = {styles.header}><Text style={styles.title}>miruYo</Text></View>
    <Tab.Navigator tabBarOptions={{
        labelStyle: {color: "#ffffff", fontSize: 12, textAlign: 'center', fontWeight: 'bold'},
        style:{backgroundColor:"#ff5733",}}} tabBarPosition="top">
        <Tab.Screen name = "Home" component={Home}/>
        <Tab.Screen name = "Browser" component={Browser}/>
        <Tab.Screen name = "Character" component={Character}/>
        <Tab.Screen name = "About" component={About}/>
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
