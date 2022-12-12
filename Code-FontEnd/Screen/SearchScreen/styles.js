import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContent:{
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  boxFind:{
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center'
  },
  boxBreakLaw:{
    position: 'absolute',
    top: 114,
    left: 44
  },
  boxStudent:{
    position: 'absolute',
    top: 114,
    right: 44
  },
  boxAccount:{
    position: 'absolute',
    top: 207,
    left: 44
  },
  boxRegister:{
    position: 'absolute',
    top: 207,
    right: 44
  },
});

export default styles;
