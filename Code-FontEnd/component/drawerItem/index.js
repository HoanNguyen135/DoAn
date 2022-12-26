import { View, Text } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../store/slices/user";
import { useSelector, useDispatch } from "react-redux";


const DrawerItemComponent = ({ name, setFocus, focus }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let icon, title;

  switch (name) {
    case "HomeScreen":
      icon = focus == name ? "home" : "home-outline";
      title = "Trang chủ";
      break;
    case "InfoStudentScreen":
      icon = focus == name ? "heart-circle" : "heart-circle-outline";
      title = "Thông tin cá nhân";
      break;
    case "Setting":
      icon = focus == name ? "settings" : "settings-outline";
      title = "Cài đặt";
      break;
    case "ApplicationStackScreen":
      icon = focus == name ? "ios-list" : "ios-list-outline";
      title = "Danh sách đơn đăng ký";
      break;
    case "ListInfrastructureScreen":
      icon = focus == name ? "bulb" : "bulb-outline";
      title = "Quản lý cơ sở vật chất";
      break;
    case "LogOut":
      icon = focus == name ? "log-in" : "log-in-outline";
      title = "Đăng xuất";
      break;
    default:
      break;
  }

  return (
    <DrawerItem
      icon={({ focused, color, size }) => (
        <Ionicons color={color} size={size} name={icon} />
      )}
      focused={focus == name ? true : false}
      label={title}
      onPress={() => {
        if (name !== "LogOut") {
          setFocus(name);
          navigation.navigate(name);
        } else {
          dispatch(logout());
        }
      }}
    />
  );
};

export default DrawerItemComponent;
