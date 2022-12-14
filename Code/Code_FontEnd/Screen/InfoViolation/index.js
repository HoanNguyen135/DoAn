import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FormatDate, formatDateMySQL } from "../../help";
import { fetchUpdateViolation } from "../../store/slices/violation";
import * as MailComposer from "expo-mail-composer";
import showNotice from "../../help/ShowToast";
import { updataData } from "../../store/slices/search";

const InfoViolation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useRoute();

  const dispatch = useDispatch();

  const data = route.params.data;

  const update = route.params.update;

  const [isAvailable, setIsAvailable] = useState(false);

  const navigation = useNavigation();

  const [dataMail, setDataMail] = useState(data);

  useEffect(() => {
    const checkAvailable = async () => {
      const isMailAvailable = MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    };
    checkAvailable();
  }, []);

  const handleRegister = (datas) => {
    setDataMail(datas);
    dispatch(
      fetchUpdateViolation({
        ...datas,
        idKhu: data.idKhu,
        idPhong: data.idPhong,
        Date_created: formatDateMySQL(datas.Date_created),
        idViPham: data.idViPham,
        idSV: data.idSV,
      })
    ).then((res) => {
      if (update) {
        dispatch(
          updataData({
            ...datas,
            idKhu: data.idKhu,
            idPhong: data.idPhong,
            Date_created: formatDateMySQL(datas.Date_created),
            idViPham: data.idViPham,
            idSV: data.idSV,
          })
        );
      }
    });
  };

  const handleSendToParent = () => {
    MailComposer.composeAsync({
      subject: `Th??ng b??o vi ph???m t???i ph??? huynh c???a sinh vi??n ${dataMail.HoTen}`,
      body: `????y l?? th?? th??ng b??o l???i vi ph???m c???a sinh vi??n ??ang ??? n???i tr?? k?? t??c x?? c???a tr?????ng ?????i h???c Th???y L???i\n\n H??? t??n sinh vi??n: ${
        dataMail.HoTen
      } \n M?? sinh vi??n: ${dataMail.MSV}\nL???p: ${dataMail.Lop}\nL???i vi ph???m : ${
        dataMail.NoiDungViPham
      }\n Ng??y vi ph???m: ${FormatDate(dataMail.NgayViPham)}\n M???c ????? vi ph???m: ${
        dataMail.MucDo
      }\n\n Mong ph??? huynh ch?? ?? v?? nh???c nh??? con em c???a m??nh ????? kh???c ph???c l???i vi ph???m kh??ng ????? x???y ra l???i.`,
      recipients: [`${dataMail.Email_Phuhuynh}`],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <InputText
          control={control}
          inputName="FullName"
          placehorder={"Nh???p h??? v?? t??n"}
          rules={{ required: "Vui l??ng nh???p h??? v?? t??n " }}
          data={data.HoTen}
          editable={false}
        />
        <InputText
          control={control}
          inputName="ContentViolent"
          placehorder={"Nh???p n???i dung vi ph???m"}
          rules={{ required: "Vui l??ng nh???p n???i dung vi ph???m" }}
          data={data.NoiDungViPham}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nh???p ng??y vi ph???m"}
          rules={{ required: "Vui l??ng nh???p ng??y vi ph???m" }}
          data={FormatDate(data.NgayViPham)}
        />
        <InputText
          control={control}
          inputName="MSV"
          placehorder={"Nh???p m?? sinh vi??n"}
          rules={{ required: "Vui l??ng nh???p m?? sinh vi??n" }}
          data={data.MSV}
          editable={false}
        />
        <InputText
          control={control}
          inputName="Class"
          placehorder={"Nh???p l???p"}
          rules={{ required: "Vui l??ng nh???p l???p" }}
          data={data.Lop}
          editable={false}
        />
        <InputText
          control={control}
          inputName="Level"
          placehorder={"Nh???p m???c ????? vi ph???m"}
          rules={{ required: "Vui l??ng nh???p m???c ????? vi ph???m" }}
          data={data.MucDo}
        />
        <InputText
          control={control}
          inputName="Note"
          placehorder={"Nh???p ghi ch??"}
          rules={{ required: "Vui l??ng nh???p ghi ch??" }}
          data={data.GhiChu}
        />
        <InputText
          control={control}
          inputName="Email_Parent"
          placehorder={"Nh???p email ph??? huynh"}
          rules={{ required: "Vui l??ng nh???p email ph??? huynh" }}
          data={data.Email_Phuhuynh}
          editable={false}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleRegister)}
        >
          <Text style={styles.textEdit}>C???p nh???t</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDelete} onPress={handleSendToParent}>
          <Text style={styles.textEdit}>G???i vi ph???m cho ph??? huynh</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoViolation;
