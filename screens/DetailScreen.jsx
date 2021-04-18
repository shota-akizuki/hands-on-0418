import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  textContainer: {
    margin: 10,
  },
});

export const DetailScreen = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: route.params.article.urlToImage }}
      />
      <View style={styles.textContainer}>
        <Text>{route.params.article.title}</Text>
      </View>
    </SafeAreaView>
  );
};
