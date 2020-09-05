import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/login/LoginScreen";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import RemindScreen from "../screens/auth/remind/RemindScreen";

const AuthNavigatorStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthNavigatorStack.Navigator headerMode="none" initialRouteName="Login">
      <AuthNavigatorStack.Screen name="Login" component={LoginScreen} />
      <AuthNavigatorStack.Screen name="Register" component={RegisterScreen} />
      <AuthNavigatorStack.Screen name="Remind" component={RemindScreen} />
    </AuthNavigatorStack.Navigator>
  );
}
