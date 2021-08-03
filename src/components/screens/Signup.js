import React from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import SignupForm from "../forms/SignupForm";
import Logo from "../shared/Logo";

const { width, height} = Dimensions.get("window");

function Signup({ navigation }) {

    return (
        <ImageBackground
            source={require("../../../assets/fondos.png")}
            resizeMode="cover" style={styles.background}
        >
            <View style={styles.container}>
            <Logo/>
                <SignupForm />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{color:"#fff", fontSize: 16}}>
                        Already got an account? <Text style={styles.signin}>Sign in</Text>
                    </Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>

    );
}
/**/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    signin: {
        color: "#fff",
        fontStyle: "italic",
        fontWeight:"bold"
    },

    background: {
        flex: 1,
        justifyContent: "center",
        width: width,
        height: height,
    },
});
export default Signup;