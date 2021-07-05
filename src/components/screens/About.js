import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { AnimeApis } from "../../api";

const About = () => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const data = await AnimeApis();
    setAnimeData(data);
  };

  return (
    <View>
      {animeData.length ? (
        <View style={styles.container}>
          {animeData.map((anime, id) => (
            <View key={id}>
              <Image source={{ uri: anime.image_url }} style={styles.images} />
              <Text>{anime.title}</Text>
              <Text>{anime.type}</Text>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.container}>
          <Text>No se cargo la API</Text>
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

export default About;