import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const TeacherNavigatorStack = createStackNavigator();

export default function TeacherNavigator() {
  return (
    <TeacherNavigatorStack.Navigator initialRouteName="">
      <TeacherNavigatorStack.Screen name="" component={} />
    </TeacherNavigatorStack.Navigator>
  );
}
