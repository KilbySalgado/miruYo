import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { GetAnime } from "../../api";

const { width, height } = Dimensions.get("window");

const Anime = ({ navigation, route }) => {
  const { idAnime } = route.params;

  const [anime, setAnime] = useState([]);

  useEffect(() => {
    getAnime();
  }, []);

  const getAnime = async () => {
    let response;
    response = await GetAnime(idAnime);
    setAnime(response);
  };

  console.log(anime);
  //Api que me devuelva solo el anime que quiero por medio del id

  return (
    <View style={styles.container}>
      {anime ? (
        <ScrollView>
          <View style={styles.FormAnime}>
            <Image source={{ uri: anime.image_url }} style={styles.images} />
            <View style={styles.titleForm}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {anime.title}
              </Text>
              <Text>{anime.title_japanese}</Text>
              <Text style={{ marginTop: 3, marginBottom: 5 }}>
                Score: {anime.score}
              </Text>
              <Text>Rank: {anime.rank}</Text>
            </View>
            <View style={{ padding: 25, textAlign: "justify" }}>
              <Text>Synopsis:</Text>
              <Text>{anime.synopsis}</Text>
              <Button
                title="Personajes"
                onPress={() => {
                  navigation.navigate("Character", {
                    idAnimeCharacter: idAnime,
                  });
                }}
              />
            </View>
          </View>
        </ScrollView>
      ) : (
        <View>
          <Text>No hay</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
    flex: 1,
  },

  images: {
    width: width * 0.6,
    height: height * 0.4,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 15,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  titleForm: {
    marginTop: 15,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  FormAnime: {
    width: width,
    height: height,
  },
});

export default Anime;
