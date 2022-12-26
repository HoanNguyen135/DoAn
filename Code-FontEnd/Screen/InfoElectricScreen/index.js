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
import { fetchUpdateArea } from "../../store/slices/area";
import { useNavigation } from "@react-navigation/native";
import { FormatDate } from "../../help";

const InfoElectricScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const data = route.params.data;

  const navigation = useNavigation();

  const handleUpdate = (data) => {
    // dispatch(
    //   fetchUpdateArea({ data: { ...data, Id: route.params.data.idKhu } })
    // ).then((res) => {
    //   navigation.navigate("AreaScreen");
    // });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="Room"
          placehorder={"Nhập tên phòng"}
          rules={{ required: "Vui lòng nhập tên phòng " }}
          data={data.TenPhong}
          editable={false}
        />
        <InputText
          control={control}
          inputName="OldNumber"
          placehorder={"Nhập số điện cũ"}
          rules={{ required: "Vui lòng nhập số điện cũ" }}
          data={data.SoDienTruoc.toString()}
        />
        <InputText
          control={control}
          inputName="NewNumber"
          placehorder={"Nhập số điện mới"}
          rules={{ required: "Vui lòng nhập số điện mới" }}
          data={data.SoDienSau.toString()}
        />
         <InputText
          control={control}
          inputName="Status"
          placehorder={"Nhập trạng thái"}
          rules={{ required: "Vui lòng nhập trạng thái" }}
          data={data.TrangThaiDienNuoc}
        />
        <InputText
          control={control}
          inputName="SumMoney"
          placehorder={"Nhập tổng tiền"}
          rules={{ required: "Vui lòng nhập tổng tiền" }}
          data={((data.SoDienSau - data.SoDienTruoc) * data.giaDien).toString()}
          editable={false}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày tạo"}
          rules={{ required: "Vui lòng nhập ngày tạo" }}
          data={FormatDate(data.NgayTaoDon)}
        />
        <InputText
          control={control}
          inputName="PriceElectric"
          placehorder={"Nhập giá điện"}
          rules={{ required: "Vui lòng nhập giá điện" }}
          data={data.giaDien.toString()}
          editable={false}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit()}
        >
          <Text style={styles.textEdit}>Cập nhật</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoElectricScreen;
