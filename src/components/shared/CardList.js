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

const { width, height } = Dimensions.get("window");

const CardList = ({ animeData, navigation, callback }) => {
  return (
      <FlatList
        data={animeData}
        numColumns={2}
        renderItem={({ item, i}) => (
          <View>
            <TouchableOpacity
              style={styles.Card}
              key={i}
              onPress={() => {
                navigation.navigate("Anime", { idAnime: item.mal_id });
              }}
            >
              <Image source={{ uri: item.image_url }} style={styles.images} />
              <View style={{ padding: 10 }}>
                <Text style={styles.titulo}>{item.title}</Text>
              </View>
              <View
                style={{
                  position: "absolute",
                  end: 5,
                  top: 270,
                }}
              >
                <Text style={styles.puntuacion}>{item.score}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 95,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#ff5733",
    borderRadius: 10,
  },
  images: {
    width: width * 0.35,
    height: 200,
    marginBottom: 5,
    alignSelf: "center",
    borderRadius: 5,
    position: "relative",
  },
  puntuacion: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
  },
  titulo: {
    textAlign: "center",
    color: "#000",
    marginTop: 5,
  },
  Card: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 1,
    width: width * 0.45,
    height: height * 0.4,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    marginBottom: 10,
  },
});

export default CardList;
