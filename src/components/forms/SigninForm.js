import React, { useState, useContext } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {Text} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { Context as AuthContext } from "../../providers/AuthContext";

const { height, width } = Dimensions.get("window");

function SigninForm() {
    const { state, signin } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState("");

    function handleVerify(input) {
        if (input === "email") {
            if (!email) setEmailError(true);
            else setEmailError(false);
        } else if (input === "password") {
            if (!password) setPasswordError(true);
            else setPasswordError(false);
        } else if (input === "signin") {
            if (email && password && !emailError && !passwordError) {
                signin(email, password);
            }
        }
    }

    return (
        <View>
            {state.errorMessage != null && <Text>{state.errorMessage}</Text>}
            <View style={styles.inputs}>
                <Input
                    onChangeText={setEmail}
                    placeholder="email@example.com"
                    leftIcon={<Icon name="envelope" style={{ fontSize: 25, color: "#393E46", padding: 5 }} />}
                    label='Email'
                    autoCapitalize="none"
                    value={email}
                    onBlur={() => handleVerify("email")} />
                {emailError && <Text style={{ color: "#db3236", marginTop: 10, fontStyle:"italic", marginBottom: 10, }}>*Por favor ingresa tu correo</Text>}
            </View>

            <View style={styles.inputs}>
                <Input
                    onChangeText={setPassword}
                    leftIcon={<Icon name="lock" style={{ fontSize: 25, color: "#393E46", padding: 5 }} />}
                    label='Password'
                    secureTextEntry
                    autoCapitalize="none"
                    value={password}
                    onBlur={() => handleVerify("password")} />
                {passwordError && <Text style={{ color: "#db3236", marginTop: 10, fontStyle:"italic" }}>*Por favor ingresa tu contraseña</Text>}
            </View>
            <Button
                mode="contained"
                buttonStyle={styles.boton}
                onPress={() => handleVerify("signin")}
                title="Sign in"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    inputs: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 30,
        height: height * 0.1,
    },
    boton: {
        width: width * 0.3,
        height: height * 0.05,
        justifyContent: "center",
        backgroundColor:"#133b5c",
        marginLeft: width * 0.64,
        borderRadius: 20,
    },
});
export default SigninForm;