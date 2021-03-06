import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import Logo from "../shared/Logo";
import Icon from "react-native-vector-icons/FontAwesome";
import SigninForm from "../forms/SigninForm";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Button } from "react-native-elements";
import getEnvVars from "../../../enviroment";
import * as Google from "expo-google-app-auth";

const { width, height } = Dimensions.get("window");

const Signin = ({ navigation }) => {
    const { state, signInWithGoogle, clearErrorMessage } = useContext(AuthContext);
    const { androidClientId } = getEnvVars();
    const { iosClientId } = getEnvVars();
    const [error, setError] = useState("");

    const signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: androidClientId,
                iosClientId: iosClientId,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                signInWithGoogle(result)
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }
    return (
        <ImageBackground
            source={require("../../../assets/fondos.png")}
            resizeMode="cover" style={styles.background}
        >
            <View style={styles.container}>
                <Logo />
                <SigninForm />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("forgotPassword");
                    }}
                >
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </TouchableOpacity>
                <Text style={styles.o}> ――――――――――――O――――――――――――</Text>
                <Button title="Sign Up" buttonStyle={styles.signup} onPress={() => navigation.navigate("Signup")} />
                {error ? <Alert title={error} type="error" /> : null}
                <Button icon={<Icon name="google-plus" size={15} color="white" />} onPress={() => signInWithGoogleAsync()} iconLeft buttonStyle={styles.buttonGoogle} title=" Sign In with Google" />
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
    forgotPassword: {
        textAlign: "center",
        color: "#fff",
        marginBottom: 10,
        marginTop: 20,
    },
    signup: {
        marginTop: 20,
        borderRadius: 50,
        marginBottom: 10,
        marginLeft: 60,
        marginRight: 60,
        backgroundColor: "#284184",
    },
    o: {
        textAlign: "center",
        marginTop: 10,
        color: "#fff",
        marginBottom: 20,
    },
    buttonGoogle: {
        backgroundColor: "#284184",
        marginTop: 20,
        marginLeft: 60,
        marginRight: 60,
        borderRadius: 50,
    },
    background: {
        flex: 1,
        justifyContent: "center",
        width: width,
        height: height,
    },
});

export default Signin;