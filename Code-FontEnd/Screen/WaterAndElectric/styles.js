import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#EBFBFF",
  },
  layout: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
 
  },
  layoutTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.logo,
    height: 40
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  layoutTextHeader:{
    fontWeight: 'bold',
    color: COLORS.white
  }
});

export default styles;
