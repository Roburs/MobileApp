import { StyleSheet } from "react-native";
import * as colors from "../../../styles/colos";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
  },
  input: {
    borderWidth: 1,
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 16,
    height: 45,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  inputBox: {
    marginVertical: 10,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  rememberBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  rememberText: {
    color: colors.LIGHT_BLUE_COLOR,
  },
  formBox: {
    flex: 1,
    paddingBottom: 32,
    marginTop: 32,
  },
  registerBox: {
    alignItems: "center",
    marginBottom: 16,
  },
  registerText: {
    fontSize: 18,
    color: colors.LIGHT_BLUE_COLOR,
  },
  welcomeBox: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  button: {
    flex: 1,
    borderColor: colors.GRAY_COLOR,
    borderWidth: 0.3,
    backgroundColor: colors.WHITE_COLOR,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginHorizontal: 32,
    marginBottom: 15,
    height: 40,
  },
  buttonBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    color: colors.BLACK_COLOR,
    marginHorizontal: 16,
    fontSize: 18,
    lineHeight: 22,
  },
});
