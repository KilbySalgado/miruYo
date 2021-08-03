import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const Logo = () => {
    return (
        <View style={{backgroundColor: "#fff" ,borderRadius:10,alignSelf: "center", width:width *0.28, height:width * 0.28, marginBottom: width*0.1,alignItems:"center", justifyContent:"center"}}>
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