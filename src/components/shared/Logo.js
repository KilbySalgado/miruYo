import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";

const { width, height } = Dimensions.get("screen");

const Logo = () => {
    return (
        <View>
            <Image
                style={styles.logo}
                source={require("../../../assets/miruYo.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
});

export default Logo;