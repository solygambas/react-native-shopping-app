import React from "react";
import { Text, View, Button } from "react-native";

import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route }) {
  const { title, rating, body } = route.params;
  //   const pressHandler = () => {
  //     navigation.goBack();
  //   };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.titleText}>{body}</Text>
      <Text style={globalStyles.titleText}>{rating}</Text>
      {/* <Button title="go back to home" onPress={pressHandler} /> */}
    </View>
  );
}
