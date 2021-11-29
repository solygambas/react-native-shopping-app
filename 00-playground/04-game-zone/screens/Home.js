import React from "react";
import { Text, View, Button } from "react-native";

import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails"); // only one instance on the stack
    // navigation.push("ReviewDetails"); // a new instance is created every time
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="go to review details" onPress={pressHandler} />
    </View>
  );
}
