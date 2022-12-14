import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  btnRegister: {
    width: 324,
    height: 46,
    backgroundColor: COLORS.logo,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginLeft: 11,
    marginBottom: 13,
    alignSelf: "center",
  },
  textEdit: {
    fontSize: 18,
    color: COLORS.white,
  },
  btnDelete: {
    width: 324,
    height: 46,
    backgroundColor: COLORS.red,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginLeft: 11,
    marginBottom: 13,
    alignSelf: "center",
  },
});

export default styles;
