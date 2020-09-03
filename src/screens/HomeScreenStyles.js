import { StyleSheet } from "react-native";
import * as colors from "../styles/colos";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeText: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 46,
  },
  button: {
    backgroundColor: colors.LIGHT_BLUE_COLOR,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 15,
    height: 50,
  },
  buttonBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.WHITE_COLOR,
    marginHorizontal: 10,
    fontSize: 17,
    lineHeight: 22,
  },
});
