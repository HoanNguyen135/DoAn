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
import { FormatDate, formatDateMySQL } from "../../help";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchCreateRepair } from "../../store/slices/repair";

const AddRepairScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddStudentInRoom = (datas) => {
    dispatch(fetchCreateRepair(datas)).then((res) => {
      if (!res.error && res.payload.data.length > 0) {
        navigation.navigate("ListRepairScreen");
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="NameRoom"
          placehorder={"Nhập tên phòng"}
          rules={{ required: "Vui lòng nhập tên phòng" }}
        />
        <InputText
          control={control}
          inputName="ContentRepair"
          placehorder={"Nhập nội dung sửa chữa"}
          rules={{ required: "Vui lòng nhập nội dung sửa chữa" }}
        />
        <InputText
          control={control}
          inputName="Status"
          placehorder={"Nhập trạng thái sửa chữa"}
          rules={{ required: "Vui lòng nhập trạng thái sửa chữa" }}
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
          <Text style={styles.textEdit}>Thêm sữa chữa</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddRepairScreen;
