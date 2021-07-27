import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const Logo = () => {
    return (
        <View style={{alignSelf: "center"}}>
            <Image
                style={styles.logo}
                source={require("../../../assets/miruYo.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: width * 0.20,
        height: height * 0.20,
        resizeMode: "contain",
    },
});

export default Logo;