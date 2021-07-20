import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AnimeCharacter } from "../../api";
import CardListCharacters from "../shared/CardListCharacters";

const CharacterAnime = ({ route }) => {
  const { idAnimeCharacter } = route.params;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async () => {
    const data = await AnimeCharacter(idAnimeCharacter);
    setCharacters(data);
  };

  return (
    <View>
      <CardListCharacters animeCharacters={characters} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CharacterAnime;