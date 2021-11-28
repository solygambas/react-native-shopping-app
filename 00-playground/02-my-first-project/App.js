import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Sara");
  const [person, setPerson] = useState({ name: "Mario", age: 40 });

  const clickHandler = () => {
    setName("John");
    setPerson({ name: "Luigi", age: 45 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, world!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>
          Lorem <Text>ipsum</Text> dolor sit amet.
        </Text>
        <Text>My name is {name}.</Text>
        <Text>
          His name is {person.name} and is age is {person.age}.
        </Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <View style={styles.buttonContainer}>
          <Button title="Update State" onPress={clickHandler} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
