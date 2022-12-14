import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Controller } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { InputText } from "../../component";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { FormatDate, formatDateMySQL } from "../../help";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchListInfrastructure } from "../../store/slices/infrastructure";
import { useRoute } from "@react-navigation/native";
import ModalDropdown from "react-native-modal-dropdown";
import { COLORS } from "../../contains";
import { fetchAddInfrastructureInRoom } from "../../store/slices/infrastructure";

const AddInfrastructureInRoom = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const idPhong = route.params.idPhong;
  const idKhu = route.params.idKhu;

  const [nameInfrastructure, setNameInfrastructure] = useState();

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchListInfrastructure()).then((res) => {
      if (!res.error) {
        const dataListInfrastructure = res.payload.data;

        const listNameInfrastructure = dataListInfrastructure.map((item) => {
          return item.TenCsvc;
        });

        setData(listNameInfrastructure);
      }
    });
  }, []);

  const handleSelect = (index, value) => {
    setNameInfrastructure(value);
  };

  const handleEdit = (datas) => {
    if (typeof datas.Note === "undefined") {
      datas.Note = "";
    }

    dispatch(
      fetchAddInfrastructureInRoom({
        ...datas,
        idPhong,
      })
    ).then((res) => {
      if (!res.error && res.payload.data.length > 0) {
        navigation.navigate("ListInfrastructureInRoom", { idArea:idKhu, idRoom:idPhong });
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Controller
          control={control}
          name={"NameInfrastructure"}
          rules={{ required: "Vui l??ng nh???p t??n c?? s??? v???t ch???t" }}
          defaultValue={nameInfrastructure}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={styles.containerModal}>
              <View style={styles.boxInput}>
                <View style={styles.boxText}>
                  <Text style={styles.nameText}>T??n c?? s??? v???t ch???t</Text>
                </View>
                <ModalDropdown
                  options={data}
                  style={styles.modelDrop}
                  onSelect={(index, value) => {
                    handleSelect(index, value), onChange(value);
                  }}
                  dropdownStyle={{ width: 100, marginLeft: 18 }}
                  dropdownTextStyle={{ fontSize: 13, color: COLORS.black }}
                >
                  <View
                    style={[
                      styles.inputText,
                      {
                        borderColor: error ? "red" : "orange",
                      },
                    ]}
                  >
                    <Text>{nameInfrastructure}</Text>
                  </View>
                </ModalDropdown>
              </View>
              {error && (
                <View style={styles.boxError}>
                  <Text style={{ color: "red" }}>{error?.message}</Text>
                </View>
              )}
            </View>
          )}
        />
        <InputText
          control={control}
          inputName="Number"
          placehorder={"Nh???p s??? l?????ng"}
          rules={{ required: "Vui l??ng nh???p s??? l?????ng" }}
        />
        <InputText
          control={control}
          inputName="NumberGood"
          placehorder={"Nh???p s??? l?????ng c??n t???t"}
          rules={{ required: "Vui l??ng nh???p s??? l?????ng c??n t???t" }}
        />
        <InputText
          control={control}
          inputName="NumberBad"
          placehorder={"Nh???p s??? l?????ng ???? h???ng"}
          rules={{ required: "Vui l??ng nh???p s??? l?????ng ???? h???ng" }}
        />
        <InputText
          control={control}
          inputName="Note"
          placehorder={"Nh???p ghi ch??"}
          rules={{}}
        />
        <InputText
          control={control}
          inputName="Date_created"
          placehorder={"Nh???p ng??y t???o"}
          rules={{ required: "Vui l??ng nh???p ng??y t???o" }}
          data={FormatDate(Date.now())}
        />
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleEdit)}
        >
          <Text style={styles.textEdit}>Th??m</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddInfrastructureInRoom;
