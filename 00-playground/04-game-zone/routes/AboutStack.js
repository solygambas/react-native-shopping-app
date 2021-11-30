// https://reactnavigation.org/docs/hello-react-navigation
// https://reactnavigation.org/docs/native-stack-navigator#props

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/About";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "About GameZone" }}
      />
    </Stack.Navigator>
  );
}
