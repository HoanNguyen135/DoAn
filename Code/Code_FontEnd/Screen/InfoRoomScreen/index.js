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
import { useSelector, useDispatch } from "react-redux";
import { fetchUpdateRoom } from "../../store/slices/room";
import { useNavigation } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";

const InfoRoomScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const data = route.params.data;

  const navigation = useNavigation();

  const handleUpdate = (dataText) => {
    dispatch(
      fetchUpdateRoom({
        data: {
          ...dataText,
          Date_created: formatDateMySQL(dataText.Date_created),
          idPhong: data.idPhong,
          idKhu: data.idKhu,
        },
      })
    )
    .then((res) => {
      if(!res.error){
        navigation.navigate("RoomScreen",{data: {idKhu: data.idKhu}});
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="NameRoom"
          placehorder={"Nhập tên khu"}
          rules={{ required: "Vui lòng nhập tên khu " }}
          data={data.TenPhong}
        />
        <InputText
          control={control}
          inputName="Describe"
          placehorder={"Nhập mô tả"}
          rules={{ required: "Vui lòng nhập mô tả" }}
          data={data.MoTa}
        />
        <InputText
          control={control}
          inputName="Status"
          placehorder={"Nhập status"}
          rules={{ required: "Vui lòng nhập status" }}
          data={data.TrangThai}
        />
        <InputText
          control={control}
          inputName="NumberLimit"
          placehorder={"Nhập số lượng người"}
          rules={{ required: "Vui lòng nhập số lượng người" }}
          data={data.SoLuong.toString()}
        />
        <InputText
          control={control}
          inputName="Floor"
          placehorder={"Nhập tên tầng"}
          rules={{ required: "Vui lòng nhập tên tầng" }}
          data={data.Tang}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(data.NgayTao)}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleUpdate)}
        >
          <Text style={styles.textEdit}>Cập nhật</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoRoomScreen;
