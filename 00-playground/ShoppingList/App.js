import React, { useState } from "react";
// import { StyleSheet, Image, Text, View } from "react-native";
import {
  StyleSheet,
  FlatList,
  Text,
  Platform,
  View,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
const { v4: uuidv4 } = require("uuid");

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "Eggs" },
    { id: uuidv4(), text: "Bread" },
    { id: uuidv4(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      // if (Platform.OS === "web") {
      //   alert("Please enter an item");
      // } else {
      // 'ios' and 'android'
      Alert.alert("Error", "Please enter an item", { text: "Ok" });
      // }
    } else {
      setItems((prevItems) => {
        return [{ id: uuidv4(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} key={item.id} />
        )}
      />
      <StatusBar style="auto" />
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
    // paddingTop: 60,
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
