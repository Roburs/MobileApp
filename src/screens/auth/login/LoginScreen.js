import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../../../components/Button";
import withSafeAreaView from "../../../components/withSafeAreaView";

import { styles } from "./LoginScreenStyles";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeBox}>
        <Text style={styles.text}>
          Witamy na głównej stronie, co chcesz zrobić?
        </Text>
      </View>
      <ScrollView style={styles.formBox}>
        <View style={styles.inputBox}>
          <TextInput placeholder="E-mail" style={styles.input} />
          <TextInput
            secureTextEntry
            placeholder="Hasło"
            passwordRules
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Remind")}
          style={styles.rememberBox}
        >
          <Text style={styles.rememberText}>Nie pamiętasz hasła?</Text>
        </TouchableOpacity>
        <View style={styles.buttonBox}>
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            text="Zaloguj"
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={styles.registerBox}
      >
        <Text style={styles.registerText}>
          Nie masz konta? Zarejestruj sie!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default withSafeAreaView(LoginScreen);
