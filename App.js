import React from "react";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainNavigator from "./src/navigators/MainNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <MainNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
