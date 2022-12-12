import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../../contains";

const WaterGrid = () => {
  return (
    <View style={styles.layoutGrid}>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>TT</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>Phòng</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>110</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>156</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>200000đ</Text>
      </View>
      <View style={[styles.column, styles.boxIcon]}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="eye" size={14} color={COLORS.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="edit" size={14} color={COLORS.logo} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WaterGrid