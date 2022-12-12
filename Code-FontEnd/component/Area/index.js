import { View, Text, Image, TouchableOpacity } from "react-native";
import React,{useEffect} from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

const Area = ({data}) => {

  const navigation = useNavigation();

  const handleGoRoom = () => {
    navigation.navigate("RoomScreen",{data});
  };

  const handleEdit = () => { 
    navigation.navigate('InfoAreaScreen',{data})
   }

  return (
    <View style={styles.container} >
      <View style={styles.area}>
        <TouchableOpacity style={styles.btnEdit} onPress={handleEdit}>
          <Feather name="edit" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxImg} onPress={handleGoRoom}>
          <Image
            source={require("../../assets/images/Home.png")}
            style={styles.img}
          />
        </TouchableOpacity>
        <View style={styles.boxContent}>
          <Text style={styles.textContent}>{data.TenKhu}</Text>
        </View>
      </View>
    </View>
  );
};

export default Area;
