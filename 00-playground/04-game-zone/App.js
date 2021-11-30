// https://docs.expo.dev/guides/using-custom-fonts/
import "react-native-gesture-handler";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import DrawerNavigation from "./routes/DrawerNavigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <DrawerNavigation />;
  }
}
