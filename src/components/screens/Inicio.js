import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView} from "react-native";
import { AnimeApis } from "../../api";


const Inicio = () => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);
  const getApi = async () => {
    const data = await AnimeApis("&order_by=id&sort=asc&limit=10");
    setAnimeData(data);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
          {animeData.length ? (
            <View>
            {animeData.map((anime, id) => (
              <View style={styles.Card} key= {id} >
                <Image source={{ uri: anime.image_url }} style={styles.images} key={id}/>
                <Text style={styles.titulo}>{anime.title}</Text>
                <Text style={styles.puntuacion}>{anime.score}</Text>
              </View>
              ))}
              </View>
              ) : (
              <View style={styles.container}>
              <Text>No se ha cargado la api de manera correcta</Text>
              </View>
              )}
        </View>
        </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    flex: 1,
    width: 150,
    height: 200,
    alignSelf: "center",
    borderRadius: 5,
    position: "relative",
  },
  puntuacion: {
    textAlign: "right",
    color: "#ffffff",
    fontWeight: "bold",
  },
  titulo: {
    textAlign: "center",
    color: "#ffffff",
    marginTop: 5,
  },
  Card: {
    margin: 15,
    padding: 10,
    height: 300,
    width: 200,
    borderRadius: 5,
    backgroundColor: "#ff5733",
  },
});
export default Inicio;