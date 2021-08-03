import React, { useContext, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Button, Caption, Text, TextInput } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import { validate } from "email-validator";
import { Input } from "react-native-elements";

const { width, height } = Dimensions.get("window");

function SignupForm() {
    const { state, signup } = useContext(AuthContext);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullnameError, setFullnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [error, setError] = useState(false);
    function handleVerify(input) {
        if (input === "fullname") {
            if (!fullname) setFullnameError(true);
            else setFullnameError(false);
        } else if (input === "email") {
            if (!email) setEmailError(true);
            else if (!validate(email)) setEmailError(true);
            else setEmailError(false);
        } else if (input === "password") {
            if (!password) setPasswordError(true);
            else if (password.length < 6) setPasswordError(true);
            else setPasswordError(false);
        } else if (input === "confirmPassword") {
            if (!confirmPassword) setConfirmPasswordError(true);
            else if (password !== confirmPassword) setConfirmPasswordError(true);
            else setConfirmPasswordError(false);
        } else if (input === "signup") {
            if (
                fullname &&
                email &&
                password &&
                confirmPassword &&
                !fullnameError &&
                !emailError &&
                !passwordError &&
                !confirmPasswordError
            ) {
                try {
                    signup(fullname, email, password);
                } catch (error) {
                    console.log(error);
                }
            } else setError("All fields are required!");
        }
    }
    return (
        <View>
            {error && <Text>{error}</Text>}
            {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
            <View style={styles.inputs}>
                <Input
                    mode="outlined"
                    label="Fullname"
                    value={fullname}
                    onChangeText={setFullname}
                    onBlur={() => handleVerify("fullname")}
                />
                {fullnameError && <Caption>Please enter your name</Caption>}
            </View>
            <View style={styles.inputs}>
                <Input
                    mode="outlined"
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    onBlur={() => handleVerify("email")}
                />
                {emailError && <Caption>Please enter your email address</Caption>}
            </View>
            <View style={styles.inputs}>
                <Input
                    mode="outlined"
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    secureTextEntry
                    onBlur={() => handleVerify("password")}
                />
                {passwordError && (
                    <Caption>Please enter a valid password. Min 6 characters</Caption>
                )}
            </View>
            <View style={styles.inputs}>
                <Input
                    mode="outlined"
                    label="Confirm password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    autoCapitalize="none"
                    secureTextEntry
                    onBlur={() => handleVerify("confirmPassword")}
                />
                {confirmPasswordError && (
                    <Caption>Please enter your password confirmation</Caption>
                )}
            </View>
            <Button
                mode="contained"
                style={styles.boton}
                onPress={() => handleVerify("signup")}
            >
                Create account
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    inputs: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 20,
        height: height * 0.1,
    },
    boton: {
        width: width * 0.5,
        height: height * 0.05,
        justifyContent: "center",
        backgroundColor: "#133b5c",
        borderRadius: 20,
        marginBottom: 10,
        alignSelf:"flex-end",
    },
});
export default SignupForm;