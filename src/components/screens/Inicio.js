import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AnimeApis } from "../../api";
import CardList from "../shared/CardList";

const Inicio = ({ navigation }) => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const data = await AnimeApis();
    setAnimeData(data);
  };

  return (
  <View style={styles.container}>
      {animeData.length ? (
        <View>
          <CardList animeData={animeData} navigation={navigation} />
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
export default Inicio;
