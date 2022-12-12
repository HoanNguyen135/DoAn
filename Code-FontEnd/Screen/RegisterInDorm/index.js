import { View, Text ,TouchableOpacity,ScrollView,SafeAreaView} from "react-native";
import React from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";


const data = {
  id: 1,
  name: 'Hoan'
}


const RegisterInDorm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = () => { 
    alert('thay doi thong tin')
  }

  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView style={styles.container}>
      <InputText
        control={control}
        inputName="Họ và tên"
        placehorder={"Nhập họ và tên"}
        rules={{ required: "Vui lòng nhập họ tên " }}
        data={"Nguyễn Công Hoan"}
      />
      <InputText
        control={control}
        inputName="Mã sinh viên"
        placehorder={"Nhập mã sinh viên"}
        rules={{ required: "Vui lòng nhập mã sinh viên" }}
        data={"Nguyễn Công Hoan"}
      />
      <InputText
        control={control}
        inputName="Ngày sinh"
        placehorder={"Nhập ngày sinh"}
        rules={{ required: "Vui lòng nhập ngày sinh" }}
        data={"Nguyễn Công Hoan"}
      />
      <InputText
        control={control}
        inputName="Giới tính"
        placehorder={"Nhập giới tính"}
        rules={{ required: "Vui lòng nhập giới tính" }}
        data={"Nguyễn Công Hoan"}
      />
      <InputText
        control={control}
        inputName="Lớp"
        placehorder={"Nhập lớp"}
        rules={{ required: "Vui lòng nhập lớp" }}
        data={"Nguyễn Công Hoan"}
      />
      <InputText
        control={control}
        inputName="Số CMND/CCCD"
        placehorder={"Nhập số CMND/CCCD"}
        rules={{ required: "Vui lòng nhập số CMND/CCCD" }}
        data={"Nguyễn Công Hoan"}
      />
      <InputText
        control={control}
        inputName="Hộ khẩu thường trú"
        placehorder={"Nhập hộ khẩu thường trú"}
        rules={{ required: "Vui lòng nhập hộ khẩu thường trú" }}
        data={"Nguyễn Công Hoan"}
      />
      <InputText
        control={control}
        inputName="Thuộc đối tượng ưu tiên(Nếu có)"
        placehorder={"Nhập thông tin"}
        rules={{ required: "Vui lòng nhập thông tin" }}
        data={"Nguyễn Công Hoan"}
      />
      <InputText
        control={control}
        inputName="Số điện thoại cá nhân"
        placehorder={"Nhập số điện thoại cá nhân"}
        rules={{ required: "Vui lòng nhập số điện thoại cá nhân" }}
        data={"Nguyễn Công Hoan"}
      />
      <InputText
        control={control}
        inputName="Số điện thoại gia đình"
        placehorder={"Nhập số điện thoại gia đình"}
        rules={{ required: "Vui lòng nhập số điện thoại gia đình" }}
        data={"Nguyễn Công Hoan"}
      />
      <TouchableOpacity style={styles.btnRegister} onPress={handleSubmit(handleRegister)}>
        <Text style={styles.textEdit}>Đăng ký</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterInDorm;
