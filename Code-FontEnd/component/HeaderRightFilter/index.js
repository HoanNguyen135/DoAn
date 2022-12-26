import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const HeaderRightFilter = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name="filter" size={16} color="white" />
    </TouchableOpacity>
  );
};

export default HeaderRightFilter;
