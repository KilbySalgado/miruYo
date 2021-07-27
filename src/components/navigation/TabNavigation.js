import React from 'react';
import Inicio from '../screens/Inicio';
import TopAnime from '../screens/TopAnime';
import Signin from '../screens/Signin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const TabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#1d2d50',
                activeBackgroundColor: "#fff",
                inactiveBackgroundColor: "#fff",
                inactiveTintColor: "#1e5f74",
            }}
        >
            <Tab.Screen
                name="Home"
                component={Inicio}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="TopAnime"
                component={TopAnime}
                options={{
                    tabBarLabel: 'TopAnime',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Signin"
                component={Signin}
                options={{
                    tabBarLabel: 'Signin',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


export default TabNav;