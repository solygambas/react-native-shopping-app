// Reference: https://reactnative.dev/docs/textinput

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  // Button,
  // TextInput,
  // ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  // const [person, setPerson] = useState({ name: "Mario", age: 40 });
  // const [name, setName] = useState("Sara");
  // const [age, setAge] = useState("30");
  const [people, setPeople] = useState([
    { name: "Shaun", id: "1" },
    { name: "Yoshi", id: "2" },
    { name: "Mario", id: "3" },
    { name: "Luigi", id: "4" },
    { name: "Peach", id: "5" },
    { name: "Toad", id: "6" },
    { name: "Bowser", id: "7" },
  ]);

  // const clickHandler = () => {
  // setName("John");
  // setPerson({ name: "Luigi", age: 45 });
  // };

  const pressHandler = (id) => {
    // console.log(id);
    setPeople((prevPeople) => prevPeople.filter((person) => person.id != id));
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.boldText}>Hello, world!</Text>
      </View> */}
      <View style={styles.body}>
        {/* BASICS */}
        {/* <Text style={styles.boldText}> */}
        {/* Lorem <Text>ipsum</Text> dolor sit amet. */}
        {/* </Text> */}
        {/* <Text>
          His name is {person.name} and is age is {person.age}.
        </Text> */}
        {/* <View style={styles.buttonContainer}>
          <Button title="Update State" onPress={clickHandler} />
        </View> */}
        {/* TEXTINPUT */}
        {/* <Text>Enter name:</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="e.g. John Doe"
          onChangeText={(value) => setName(value)}
        />
        <Text>Enter age:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="e.g. 40"
          onChangeText={(value) => setAge(value)}
        />
        <Text>
          Name: {name}, age: {age}.
        </Text> */}
        {/* LISTS */}
        {/* <ScrollView>
          {people.map((item) => (
            <View key={item.id}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={people}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    // backgroundColor: "yellow",
    // padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  // buttonContainer: {
  //   marginTop: 20,
  // },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
