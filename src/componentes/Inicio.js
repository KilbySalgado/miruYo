import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { AnimeApis } from "../api/index";

const Inicio = () => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const data = await AnimeApis("dragonball");
    setAnimeData(data);
  };

  return (
    <View>
      {animeData.length ? (
        <View style={styles.container}>
          {animeData.map((anime) => (
            <View>
              <Text>{anime.type}</Text>
              <Text>{anime.title}</Text>
              <Image source={{ uri: anime.image_url }} style={styles.images} />
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.container}>
          <Text>No se ha cargado la api de manera correcta</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: 100,
    height: 100,
  },
});

export default Inicio;
