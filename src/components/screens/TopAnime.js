import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AnimeTop } from "../../api";
import CardList from "../shared/CardList";

const TopAnime = ({ navigation }) => {
  const [animeTop, setAnimeTop] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const dataTop = await AnimeTop();
    setAnimeTop(dataTop);
  };

  return (
  <View style={styles.container}>
      {animeTop.length ? (
        <View>
          <CardList animeData={animeTop} navigation={navigation} />
        </View>
      ) : (
        <Text>No se ha cargado la api de manera correcta</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
export default TopAnime;
