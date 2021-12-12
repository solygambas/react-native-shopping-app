// https://reactnavigation.org/docs/hello-react-navigation
// https://reactnavigation.org/docs/native-stack-navigator#props
// https://reactnavigation.org/docs/nesting-navigators/

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="GameZone" />
          ),
          headerStyle: {
            backgroundColor: "#eee",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
          headerTintColor: "#444",
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      />
    </Stack.Navigator>
  );
}
