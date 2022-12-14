import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchAddStudentInRoom } from "../../store/slices/student";
import { Controller } from "react-hook-form";
import { COLORS } from "../../contains";

const AddStudentInRoomScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = route.params;

  const [filterData, setFilterData] = useState([]);

  const [masterData, setMasterData] = useState();

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const fetchData = () => {
    fetch("http://192.168.81.108:8080/api/getListProfileStudent")
      .then((response) => response.json())
      .then((json) => {
        setFilterData(json.data);
        setMasterData(json.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddStudentInRoom = () => {
    dispatch(
      fetchAddStudentInRoom({
        MSV: search,
        idRoom: data.idRoom,
        idArea: data.idArea,
      })
    ).then((res) => {
      if (!res.error && res.payload.data.length > 0) {
        navigation.navigate("ListStudentInRoomScreen", {
          data: { idArea: data.idRoom, idRoom: data.idRoom },
        });
      }
    });
  };

  const onChangeValue = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.TenTaiKhoan ? item.TenTaiKhoan : "";
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };

  const setValueStudent = (text) => {
    setSearch(text.TenTaiKhoan)
  };

  const renderStudent = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          height: 50,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          setValueStudent(item)
        }}
      >
        <Text>{item.MSV}</Text>
        <Text>{item.HoTen}</Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 1.5, width: 900, backgroundColor: "black" }} />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <ScrollView style={styles.container}>
        <Controller
          control={control}
          name={"MSV"}
          rules={"Vui l??ng nh???p MSV"}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View style={styles.container}>
              <View style={styles.boxInput}>
                <View style={styles.boxText}>
                  <Text style={styles.nameText}>M?? sinh vi??n</Text>
                </View>
                <TextInput
                  onBlur={onBlur}
                  value={search}
                  placeholder={"Vui l??ng nh???p m?? sinh vi??n"}
                  onChangeText={(text) => {
                    onChangeValue(text);
                    onChange(text);
                  }}
                  style={[
                    styles.inputText,
                    {
                      borderColor: error ? "red" : "orange",
                    },
                  ]}
                />
              </View>
              {error && (
                <View style={styles.boxError}>
                  <Text style={{ color: "red" }}>{error.message}</Text>
                </View>
              )}
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAddStudentInRoom)}
        >
          <Text style={styles.textEdit}>Th??m sinh vi??n v??o ph??ng</Text>
        </TouchableOpacity>
      </ScrollView>

      <FlatList
        data={filterData}
        keyExtractor={(item, index) => {
          index.toString();
        }}
        renderItem={renderStudent}
        ItemSeparatorComponent={ItemSeparatorView}
        style={{ marginTop: 180, position: "absolute", borderWidth: 1 }}
      />
    </SafeAreaView>
  );
};

export default AddStudentInRoomScreen;
