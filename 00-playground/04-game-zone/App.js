// https://docs.expo.dev/guides/using-custom-fonts/

import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import HomeStack from "./routes/HomeStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <HomeStack />;
  }
}
