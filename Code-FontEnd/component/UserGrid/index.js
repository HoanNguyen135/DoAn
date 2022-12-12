import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../../contains";
import { useNavigation } from '@react-navigation/native';

const UserGrid = ({data,setIsUpdate}) => {

  const navigation = useNavigation();


  const handleGoDetail = () => { 
    navigation.navigate('InfoUserScreen',{data,setIsUpdate})
   }

  const handleGoEdit = () => { 

   }

  return (
    <View style={styles.layoutGrid}>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.Id}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.Username}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.layoutTextHeader}>{data.Position}</Text>
      </View>
      <View style={[styles.column, styles.boxIcon]}>
        <TouchableOpacity style={styles.icon} onPress={handleGoDetail}>
          <FontAwesome name="eye" size={14} color={COLORS.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={handleGoEdit}>
          <FontAwesome name="edit" size={14} color={COLORS.logo} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserGrid