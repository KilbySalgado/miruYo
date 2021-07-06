import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
} from "react-native";

const { width, height } = Dimensions.get("window");

const CardListCharacters = ({ animeCharacters, callback }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={animeCharacters}
        numColumns={2}
        renderItem={({ item, i }) => (
          <View>
            <View style={styles.Card} key={i}>
              <Image source={{ uri: item.image_url }} style={styles.images} />
              <View style={{ padding: 10 }}>
                <Text style={styles.titulo}>{item.name}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 95,
    paddingLeft: 5,
    paddingRight: 5,
  },
  images: {
    width: width * 0.45,
    height: 200,
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

export default CardListCharacters;
