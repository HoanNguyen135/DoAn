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
import { useNavigation } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";
import { fetchUpdateViolation } from "../../store/slices/violation";

const InfoViolation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const data = route.params.data;

  const navigation = useNavigation();

  const handleRegister = (datas) => {
    dispatch(fetchUpdateViolation({...datas,idKhu: data.idKhu,idPhong: data.idPhong, Date_created:formatDateMySQL(datas.Date_created),idViPham: data.idViPham,idSV: data.idSV}))
  };

  const handleSendToParent = () => {
    alert("thay doi thong tin");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="FullName"
          placehorder={"Nhập họ và tên"}
          rules={{ required: "Vui lòng nhập họ và tên " }}
          data={data.HoTen}
          editable={false}
        />
        <InputText
          control={control}
          inputName="ContentViolent"
          placehorder={"Nhập nội dung vi phạm"}
          rules={{ required: "Vui lòng nhập nội dung vi phạm" }}
          data={data.NoiDungViPham}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nhập ngày vi phạm"}
          rules={{ required: "Vui lòng nhập ngày vi phạm" }}
          data={FormatDate(data.NgayViPham)}
        />
        <InputText
          control={control}
          inputName="MSV"
          placehorder={"Nhập mã sinh viên"}
          rules={{ required: "Vui lòng nhập mã sinh viên" }}
          data={data.MSV}
          editable={false}
        />
        <InputText
          control={control}
          inputName="Class"
          placehorder={"Nhập lớp"}
          rules={{ required: "Vui lòng nhập lớp" }}
          data={data.Lop}
        />
        <InputText
          control={control}
          inputName="Level"
          placehorder={"Nhập mức độ vi phạm"}
          rules={{ required: "Vui lòng nhập mức độ vi phạm" }}
          data={data.MucDo}
        />
        <InputText
          control={control}
          inputName="Note"
          placehorder={"Nhập ghi chú"}
          rules={{ required: "Vui lòng nhập ghi chú" }}
          data={data.GhiChu}
        />
        <InputText
          control={control}
          inputName="Email"
          placehorder={"Nhập email phụ huynh"}
          rules={{ required: "Vui lòng nhập email phụ huynh" }}
          data={data.Email_Phuhuynh}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleRegister)}
        >
          <Text style={styles.textEdit}>Cập nhật</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDelete} onPress={handleSendToParent}>
          <Text style={styles.textEdit}>Gửi vi phạm cho phụ huynh</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoViolation;
