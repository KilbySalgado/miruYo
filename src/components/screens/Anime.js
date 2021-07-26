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
    <ScrollView style={styles.container}>
    <View style={styles.FormAnime}>
        <Image source={{ uri: anime.image_url }} style={styles.images} />
        <View style={styles.card}>
            <View style={styles.info}>
                <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                    {anime.title}
                </Text>
                <Text style={{ textAlign: "center", marginBottom: 15, color: "#fff", }}>{anime.title_japanese}</Text>
                <Text style={{ marginTop: 3, marginBottom: 5, color: "#1D2D50", backgroundColor: "#fff", borderRadius: 5, padding: 10, }}>
                    Score: {anime.score} - Rank: {anime.rank} - Type: {anime.type}
                </Text>
            </View>
        </View>
        <View style={styles.synopsis}>
            <Text style={{fontWeight: "bold",  color: "#222831"}}>Synopsis:</Text>
            <Text style={{textAlign:"justify", marginTop: 10, color: "#222831"}}>{anime.synopsis}</Text>
        </View>
    </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
backgroundColor: "#D8E3E7",
flex: 1,
width: width,
},
card: {
width: width * 0.9,
height: height * 0.3,
alignSelf: "center",
backgroundColor: "#133b5c",
borderRadius: 20,
position: "absolute",
marginTop: height*0.4,
zIndex: 1,
},
synopsis: {
alignSelf: "center",
backgroundColor: "#C3C9D6",
padding: 20,
marginTop: height*0.72,
width: width * 0.9,
borderRadius: 20,
},
images: {
width: width * 0.5,
height: height * 0.4,
borderRadius: 10,
marginTop: 40,
alignSelf: "center",
shadowOffset: { width: 4, height: 4 },
position: "absolute",
shadowOpacity: 0.3,
shadowRadius: 3.84,
margin: 10,
zIndex: 3,
borderWidth:  5,
borderColor: "#D8E3E7",
},
info: {
marginTop: height*0.074,
justifyContent: "center",
alignSelf: "center",
textAlign: "center",
backgroundColor: "#1e5f74",
borderRadius: 10,
padding: 15,
},
FormAnime: {
width: width,
position: "relative",
},
});

export default Anime;