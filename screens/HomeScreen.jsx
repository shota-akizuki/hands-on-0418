import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import axios from "axios";
import { ListItem } from "../components/ListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
const url =
  "https://asia-northeast1-news-app-udemy.cloudfunctions.net/dummy_news";
export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            subTitle={item.author}
            onPress={() => navigation.navigate("Detail", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};
