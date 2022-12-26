import { Text, StyleSheet, View } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    
  },
  modelDrop:{
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: COLORS.white,
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  flatList:{
    position:'relative',
    marginTop: 50,
    marginBottom: 10,
    marginLeft:12
  }
})

export default styles