// https://reactnavigation.org/docs/hello-react-navigation
// https://reactnavigation.org/docs/native-stack-navigator#props

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#eee",
          },
          headerTintColor: "#444",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "GameZone" }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ title: "Review Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
