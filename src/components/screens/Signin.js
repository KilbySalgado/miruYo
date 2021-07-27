import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, ImageBackground } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Logo from "../shared/Logo";
import Inicio from "./Inicio";

const { width, height } = Dimensions.get("window");

const Signin = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../../../assets/fondos.png")}
            resizeMode="cover" style={styles.background}
        >
            <View style={styles.container}>
                <View style={{backgroundColor: "#fff", width: width * 0.3, borderRadius: 10, height: height * 0.15, alignSelf:"center", justifyContent:"center", marginBottom:10}}>
                    <Logo />
                </View>
                <View style={styles.inputs}>
                    <Input placeholder="Email" leftIcon={<Icon name="envelope" style={{ fontSize: 25, color: "#C3C9D6", padding: 5 }} />} />
                </View>
                <View style={styles.inputs}>
                    <Input placeholder="Password" leftIcon={<Icon name="lock" style={{ fontSize: 25, color: "#C3C9D6", padding: 5}} />} />
                </View>
                <Text style={styles.forgotPassword}>Forgot your password?</Text>
                <View style={styles.boton}>
                    <Button title="Iniciar Sesion" />
                </View>
                    <Text style={{textAlign:"center", color:"#fff"}}>Don't have an account?</Text>
                    <TouchableOpacity>
                    <Text style={{textAlign:"center", color:"#fff"}}>Sign up</Text>
                    </TouchableOpacity>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,

    },

    inputs: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 20,
        height: height*0.07,
    },
    boton: {
        width: width * 0.3,
        height: height * 0.1,
        marginLeft: width * 0.64,
    },
    forgotPassword: {
        textAlign: "left",
        color: "#fff"
    },

    background: {
        flex: 1,
        justifyContent: "center",
        width: width,
        height: height,
    },
});

export default Signin;