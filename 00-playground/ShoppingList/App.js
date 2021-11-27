import React, { useState } from "react";
// import { StyleSheet, Image, Text, View } from "react-native";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { uuid } from "uuidv4";

import Header from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
  const [items, setItems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} key={item.id} />
        )}
      />
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
