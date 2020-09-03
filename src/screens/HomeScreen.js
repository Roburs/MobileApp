import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Button from "../components/Button";
import { styles } from "./HomeScreenStyles";
import ComponentsScreen from "./components/ComponentsScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeText}>
        <Text style={styles.text}>
          Witamy na głównej stronie, co chcesz zrobić?
        </Text>
      </View>
      <View style={styles.buttonBox}>
        <Button
          btnStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={() => navigation.navigate("Components")}
          text="Idę tam"
        />
        <Button
          btnStyle={styles.button}
          textStyle={styles.buttonText}
          text="Idę siam"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
