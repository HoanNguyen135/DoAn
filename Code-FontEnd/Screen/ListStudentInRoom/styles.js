import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  btnAddRoom:{
    position: 'relative',
    marginTop:20,
    marginLeft: 20,
    marginBottom:20,
    width: 100,
    height: 30,
    backgroundColor: COLORS.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  textAddRoom:{
    color: COLORS.white
  },
  btnAddStudents:{
    position: 'absolute',
    right: 20,
    top:20,
    width: 130,
    height: 30,
    backgroundColor: COLORS.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});

export default styles;
