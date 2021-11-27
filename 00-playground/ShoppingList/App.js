import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Text style={styles.text}>Hello World</Text>
      <Image
        style={styles.img}
        source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  // text: {
  //   color: "darkslateblue",
  //   fontSize: 30,
  // },
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100 / 2,
  // },
});
