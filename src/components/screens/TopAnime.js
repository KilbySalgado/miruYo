import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AnimeTop } from "../../api";
import CardList from "../shared/CardList";

const { width, height } = Dimensions.get("window");

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
    <ScrollView>
      <View style={styles.container}>
        {animeTop.length ? (
          <View>
            <CardList animeData={animeTop} navigation={navigation} />
          </View>
        ) : (
          <Text>No se ha cargado la api de manera correcta</Text>
        )}
      </View>
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
});
export default TopAnime;
