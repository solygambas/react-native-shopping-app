// https://reactnavigation.org/docs/drawer-navigator
// https://reactnavigation.org/docs/nesting-navigators

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack">
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
          options={{
            headerShown: false,
            title: "About",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
