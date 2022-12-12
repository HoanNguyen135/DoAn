import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FormatDate } from "../../help";

const StudentInRoom = ({data}) => {


  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("InfoStudentScreen",{data})
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>

      <View style={styles.boxAvatar}>
        <Image
          style={styles.imgAvatar}
          source={require("../../assets/images/avatar.png")}
        />
      </View>
      <View style={styles.infoStudent}>
        <Text style={[styles.textName,styles.text]}>{data.HoTen}</Text>
        <Text style={[styles.textMSV,styles.text]}>MSV : {data.MSV}</Text>
        <Text style={[styles.textClass,styles.text]}>Lớp : {data.Lop}</Text>
        <Text style={[styles.textBirth,styles.text]}>Ngày sinh : {FormatDate(data.NgaySinh)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StudentInRoom;
