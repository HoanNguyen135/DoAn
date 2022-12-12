import { View, Text, FlatList,TouchableOpacity,Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { UserGrid, Loading } from "../../component";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector, useDispatch } from "react-redux";
import { fetchListStudentInRoom } from "../../store/slices/student";
import { StudentInRoom } from "../../component";
import { useRoute } from "@react-navigation/native";

import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import { useNavigation } from '@react-navigation/native';


const ListStudentInRoom = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const route = useRoute();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const update = useSelector((states) => states.Student.update);

  const {idKhu: idArea, idPhong: idRoom } = route.params.data



  useEffect(() => {
    dispatch(fetchListStudentInRoom({idArea,idRoom})).then((res) => {
      if (!res.error) {
        setLoading(false);
        setData(res.payload.data);
      }
    });
  }, [update]);

  const showListStudent = ({ item }) => {
    return <StudentInRoom data={item} />;
  };


  // chọn file csv là render

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    FileSystem.readAsStringAsync(result.uri, {
      encoding: FileSystem.EncodingType.Base64
    })
      .then((b64) => XLSX.read(b64, { type: "base64" }))
      .then((wb) => {
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        const data = XLSX.utils.sheet_to_json(ws,{header: 1})
        var temp = []

        for(let i = 1 ;i< data.length;i++){
          temp.push({
            id: data[i][0],
            name: data[i][1],
            age: data[i][2],
          })
        }
        Alert.alert(JSON.stringify(temp))
      });
  };

  const handleAddStudentInRoom = () => {
    //navigation.navigate('')
  }


  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.btnAddRoom} onPress={handleAddStudentInRoom}>
          <Text style={styles.textAddRoom}>Thêm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnAddStudents} onPress={pickDocument}>
          <Text style={styles.textAddRoom}>Thêm từ file</Text>
      </TouchableOpacity>
      <FlatList
        listKey={(item) => item.idSV.toString()}
        renderItem={showListStudent}
        data={data}
      />
    </ScrollView>
  );
};

export default ListStudentInRoom;
