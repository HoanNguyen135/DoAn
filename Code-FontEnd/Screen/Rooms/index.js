import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { Room } from "../../component";
import { useRoute } from "@react-navigation/native";
import { fetchListRoom } from "../../store/slices/room";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Rooms = () => {
  
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const dataArea = route.params.data;
  
  const [floor, setFloor] = useState('Tầng 1');
  const [dataRoom, setDataRoom] = useState([])
  const [loading, setLoading] = useState(true)


  const update = useSelector((states) => states.Room.update);


  useEffect(() => {  
    dispatch(fetchListRoom({data: {floor,idArea: dataArea.idKhu}}))
    .then((res) => {
      if (!res.error) {
        setLoading(false);
        setDataRoom(res.payload.data);
      }
    });
  }, [floor,update])

  const handleChangeValue = (a) => {
    setFloor(a);
  };

  const renderRoom = ({item}) => {
    return <Room data={item}/>;
  };


  const handleAddRoom = () => {
    navigation.navigate('CreateRoomScreen',{idArea: dataArea.idKhu,floor: floor })
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxRoom}>
        <Picker
          style={{ width: 120,height: 30,justifyContent: 'center',alignItems: 'center' }}
          selectedValue={floor}
          onValueChange={(itemValue, itemIndex) => handleChangeValue(itemValue)}
          mode={"dropdown"}
        >
          <Picker.Item style={{width: 120}} label="Tầng 1" value="Tầng 1" />
          <Picker.Item style={{width: 120}} label="Tầng 2" value="Tầng 2" />
          <Picker.Item style={{width: 120}} label="Tầng 3" value="Tầng 3" />
        </Picker>
        <View style={styles.boxIconHome}>
          <Ionicons name="home-outline" size={16} color="black" />
        </View>
        <TouchableOpacity style={styles.btnAddRoom} onPress={handleAddRoom}>
          <Text style={styles.textAddRoom}>Thêm</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        renderItem={renderRoom}
        numColumns={4}
        keyExtractor={(item) => item.idPhong.toString()}
        data={dataRoom}
        style={styles.listRoom}
      />
    </View>
  );
};

export default Rooms;
