import React, { useState } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import Card from "../components/Card";

import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  //   const pressHandler = () => {
  //     navigation.navigate("ReviewDetails"); // only one instance on the stack
  //     // navigation.push("ReviewDetails"); // a new instance is created every time
  //   };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ReviewDetails", item);
            }}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      {/* <Button title="go to review details" onPress={pressHandler} /> */}
    </View>
  );
}