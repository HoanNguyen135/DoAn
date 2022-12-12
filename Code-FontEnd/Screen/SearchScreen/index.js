import { View, Text } from "react-native";
import React,{useState} from "react";
import styles from "./styles";
import { ButtonFind } from "../../component";

const SearchScreen = () => {
  const [active, setActive] = useState();

  const activeButton = (title) => {
    setActive(title);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>Chọn mục cần tìm kiếm</Text>
      <View style={styles.boxBreakLaw}>
        <ButtonFind
          title={"Vi phạm"}
          active={active}
          onPress={activeButton}
        />
      </View>
      <View style={styles.boxStudent}>
        <ButtonFind
          title={"Sinh viên"}
          active={active}
          onPress={activeButton}
        />
      </View>
      <View style={styles.boxAccount}>
        <ButtonFind
          title={"Tài khoản"}
          active={active}
          onPress={activeButton}
        />
      </View>
      <View style={styles.boxRegister}>
        <ButtonFind
          title={"Đơn đăng ký"}
          active={active}
          onPress={activeButton}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
