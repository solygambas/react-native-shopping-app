// https://reactnavigation.org/docs/hello-react-navigation
// https://reactnavigation.org/docs/native-stack-navigator#props

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/About";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="About GameZone" />
          ),
          headerTintColor: "#444",
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      />
    </Stack.Navigator>
  );
}
