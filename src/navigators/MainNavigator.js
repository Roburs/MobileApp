import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "../navigators/AuthNavigator";

const MainNavigatorStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainNavigatorStack.Navigator headerMode="none" initialRouteName="Auth">
      <MainNavigatorStack.Screen name="Auth" component={AuthNavigator} />
    </MainNavigatorStack.Navigator>
  );
}
