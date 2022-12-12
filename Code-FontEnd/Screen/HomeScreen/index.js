import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleGoManageUser = () => {
    navigation.navigate("ListUser");
  };

  const handleGoArea = () => {
    navigation.navigate("AreaStackScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHelloName}>Xin chào Hoan Nguyễn</Text>
      <TouchableOpacity style={styles.boxRoom} onPress={handleGoArea}>
        <View style={styles.infoRoom}>
          <AntDesign name="home" size={30} color="black" />
          <Text style={styles.textRoom}>Khu vực</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxEDW}>
        <View style={styles.infoRoom}>
          <Ionicons name="water-outline" size={30} color="black" />
          <Text style={styles.textRoom}>Điện nước</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxBreakLaw}>
        <View style={styles.infoRoom}>
          <AntDesign name="warning" size={30} color="black" />
          <Text style={styles.textRoom}>Vi phạm</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxBreakThing}>
        <View style={styles.infoRoom}>
          <MaterialIcons name="dangerous" size={30} color="black" />
          <Text style={styles.textRoom}>Hỏng hóc</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxUser} onPress={handleGoManageUser}>
        <View style={styles.infoRoom}>
          <AntDesign name="user" size={30} color="black" />
          <Text style={styles.textRoom}>Tài khoản</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
