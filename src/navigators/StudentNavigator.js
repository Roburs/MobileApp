import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const StudentNavigatorStack = createStackNavigator();

export default function StudentNavigator() {
  return (
    <StudentNavigatorStack.Navigator initialRouteName="">
      <StudentNavigatorStack.Screen name="" component={} />
    </StudentNavigatorStack.Navigator>
  );
}
