import { View, Text, TouchableOpacity } from "react-native";
import React,{useState,useEffect} from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Room = ({ data }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("ListStudentInRoomScreen",{data});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Text style={styles.textNameRoom}>{data.TenPhong}</Text>
      <Text style={styles.textNumberRoom}>
        {data.SoNguoi}/{data.SoLuong}
      </Text>
    </TouchableOpacity>
  );
};

export default Room;
