import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import { globalStyles, images } from "../styles/global";
import Card from "../components/Card";

export default function ReviewDetails({ route }) {
  const { title, rating, body } = route.params;
  //   const pressHandler = () => {
  //     navigation.goBack();
  //   };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
        {/* <Button title="go back to home" onPress={pressHandler} /> */}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
