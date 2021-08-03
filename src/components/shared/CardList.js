import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get("window");

const CardList = ({ animeData, navigation, callback }) => {
  return (
    <FlatList
      data={animeData}
      style={styles.container}
      numColumns={2}
      renderItem={({ item, i }) => (
        <View>
          <TouchableOpacity
            style={styles.Card}
            key={i}
            onPress={() => {
              navigation.navigate("Anime", { idAnime: item.mal_id });
            }}
          >
            <Image source={{ uri: item.image_url }} style={styles.images} />
            <View style={{ padding: 5 }}>
              <Text style={styles.titulo}>{item.title}</Text>
            </View>
            <View
              style={{position: "absolute", alignSelf: "flex-end", marginTop: height * 0.36
              }}
            >
              <Text style={styles.puntuacion}>{item.score}</Text>
              <MaterialCommunityIcons name="star" color={"#FFD700"} size={18} style={{ position: "absolute", alignSelf: "flex-end" }} />
            </View>
          </TouchableOpacity>
        </View>

      )}
    />

  );
};

const styles = StyleSheet.create({

  container: {
    alignSelf: "center",
  },

  images: {
    width: width * 0.35,
    height: height * 0.28,
    alignSelf: "center",
    borderRadius: 5,
    position: "relative",
  },
  puntuacion: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    paddingRight: 20,
  },
  titulo: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",

  },
  Card: {
    margin: 5,
    padding: 10,
    width: width * 0.42,
    height: height * 0.4,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    marginBottom: 5,
  },
});

export default CardList;
