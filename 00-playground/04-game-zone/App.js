// Reference: https://reactnative.dev/docs/textinput

// https://docs.expo.dev/guides/using-custom-fonts/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import Home from "./screens/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Home />
        <StatusBar style="auto" />
      </View>
    );
  }
}
