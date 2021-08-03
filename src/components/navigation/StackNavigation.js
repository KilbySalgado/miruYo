import React, { useContext, useEffect } from "react";
import Inicio from "../screens/Inicio";
import Anime from "../screens/Anime";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNavigation";
import Signin from "../screens/Signin";
import { Context as AuthContext } from "../../providers/AuthContext";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();


const StackNavigate = () => {

  const { state, persistLogin } = useContext(AuthContext);
  const { signout } = useContext(AuthContext);

  useEffect(() => {
    persistLogin();
  }, []);

  return (
    <NavigationContainer>
      {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator initialRouteName="Tab">
              <Stack.Screen
                name="Tab"
                component={TabNav}
                options={{
                  title: '', headerStyle: { backgroundColor: "#1d2d50" },
                  headerTitleStyle: { color: "#fff", fontWeight: "bold" },
                  headerRight: () => (
                    <TouchableOpacity onPress={() => {signout()}}>
                      <MaterialCommunityIcons name="logout" color={"#fff"} size={35} style={{marginRight: 10}}/>
                  </TouchableOpacity>
                  )
                }}
              />
              <Stack.Screen
                name="Home"
                component={Inicio}
                initialParams={{ idAnime: null }}
              />
              <Stack.Screen
                name="Anime"
                component={Anime}
                options={{
                  title: 'Anime Info',
                  headerStyle: { backgroundColor: "#1d2d50" },
                  headerTitleStyle: { color: "#fff", fontWeight: "bold" }
                }}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator initialRouteName="Signin">
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
};
export default StackNavigate;