import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Logo from '../shared/Logo'
import { firebase } from "../../firebase";
import { validate } from "email-validator";
import Alert from '../shared/Alerts';
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get("screen");

const forgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [error, setError] = useState("");

    const handleVerify = (input) => {
        if (input === "email") {
            if (!email) setEmailError(true);
            else if (!validate(email)) setEmailError(true);
            else setEmailError(false);
        }
    };
    const handleRecovery = () => {
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                navigation.navigate("Signin");
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <ImageBackground
            source={require("../../../assets/fondos.png")}
            resizeMode="cover" style={styles.background}
        >
            <View style={styles.container}>
                <Logo />
                {error ? <Alert title={error} type="error" /> : null}
                <View style={styles.inputs}>
                    <Input
                        placeholder="Email"
                        leftIcon={<Icon name="envelope" />}
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        onBlur={() => {
                            handleVerify("email");
                        }}
                        errorMessage={
                            emailError ? "Por favor ingresa una dirección de correo válida" : ""
                        }
                    />
                </View>
                <Button buttonStyle={styles.button} title="Verify" onPress={handleRecovery} />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Signin")}
                >
                    <Text style={styles.goBack}>Go back</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 110,
        borderRadius: 50,
        backgroundColor: "#133b5c",
        marginLeft: 125,
        marginTop: 30,
    },
    goBack: {
        textAlign: "center",
        marginTop: 30,
        color:"#fff",
        fontSize: 16,
    },
    inputs: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 20,
        height: height * 0.1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    background: {
        flex: 1,
        justifyContent: "center",
        width: width,
        height: height,
    }
});

export default forgotPassword;