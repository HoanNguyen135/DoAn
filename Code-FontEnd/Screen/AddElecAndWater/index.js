import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchAddElecAndWater } from "../../store/slices/electricandwater";

const AddElectricAndWaterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = route.params;

  const handleAddStudentInRoom = (datas) => {
    dispatch(
      fetchAddElecAndWater({
        Date_created: formatDateMySQL(datas.Date_created),
        Rooms: datas.Room,
        NewNumberElectric: datas.NewNumberElectric,
        NewNumberWater: datas.NewNumberWater,
        Status: datas.Status,
        idKhu: data.idKhu,
      })
    );
    // .then((res)=>{
    //   if(!res.error && res.payload.data.length>0){
    //     navigation.navigate("ListStudentInRoomScreen",{data: { idArea: data.idRoom, idRoom: data.idRoom}})
    //   }
    // })
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="Room"
          placehorder={"Nhập tên phòng"}
          rules={{ required: "Vui lòng nhập tên phòng" }}
        />
        <InputText
          control={control}
          inputName="NewNumberElectric"
          placehorder={"Nhập số điện mới"}
          rules={{ required: "Vui lòng nhập số điện mới" }}
        />
        <InputText
          control={control}
          inputName="NewNumberWater"
          placehorder={"Nhập số nước mới"}
          rules={{ required: "Vui lòng nhập số nước mới" }}
        />
        <InputText
          control={control}
          inputName="Status"
          placehorder={"Nhập trạng thái"}
          rules={{ required: "Vui lòng nhập trạng thái" }}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(Date.now())}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleAddStudentInRoom)}
        >
          <Text style={styles.textEdit}>Thêm điện nước</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddElectricAndWaterScreen;
