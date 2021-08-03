import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, Image } from "react-native";
import { SearchBar } from "react-native-screens";
import { AnimeApis } from "../../api";
import CardList from "../shared/CardList";

const { width, height } = Dimensions.get("window");

const Inicio = ({ navigation }) => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const data = await AnimeApis();
    setAnimeData(data);
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.imagen} source={require("../../../assets/carrusel2.png")}></Image>
      {animeData.length ? (
        <View style={styles.animes}>
          <View style={styles.recomendados}>
            <View>
              <Text style={{ fontSize: 20, paddingLeft: 15, padding: 10, color: "#fff", fontWeight: "bold", }}>Animes</Text>
              <CardList animeData={animeData} navigation={navigation} />
            </View>
          </View>
        </View>

      ) : (
        <Text>No se ha cargado la api de manera correcta</Text>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D8E3E7",
    flex: 1,
    width: width,
    height: height,
  },
  animes: {
    //backgroundColor: "#133b5c",
    justifyContent: "center",
    alignSelf: "center",
    width: width,
    //padding: 5,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    marginTop: height * 0.30,
    zIndex:1,

  },
  recomendados: {
    backgroundColor: "#133b5c",
    //backgroundColor: "#1e5f74",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    //margin: 10,
  },
  imagen: {
    width: width*0.97,
    height: height * 0.3,
    alignSelf: "center",
    marginTop: 5,
    zIndex: 1,
    position: "absolute",
  }
});
export default Inicio;