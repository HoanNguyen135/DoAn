import React, { useEffect, useState } from "react";
import { Switch, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../contains";
import { HomeScreen, Rooms, WaterAndElectric } from "../Screen";
import HomeStackScreen from "./HomeNavigation";
import ElecAndWaterStackScreen from "./ElecAndWaterNavigation";
import AreaStackScreen from "./AreaNavigation";
import FilterStackScreen from "./FilterNavigation";
import RegisterAccountScreen from "../Screen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const id = 9;

  const [message, setMessage] = useState("student");

  // useEffect(() => {
  //   console.log("Hoan");
  //   // fetch( 'http://192.168.81.101:8080/api/checkExistInfoStudent/9' )
  //   // .then( response => response.json() )
  //   // .then( response => {
  //   //   console.log(response)
  //   // } );
  // });


  if (message == "student") {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home": {
                iconName = focused ? "home" : "home-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              }
              case "Search": {
                iconName = focused ? "ios-search-outline" : "ios-search";
                return <Ionicons name={iconName} size={size} color={color} />;
              }
              case "WaterAndElectric": {
                iconName = focused ? "water-outline" : "water";
                return <Ionicons name={iconName} size={size} color={color} />;
              }
              case "Area": {
                iconName = focused ? "door-open" : "door-sliding";
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              }
            }
          },
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: COLORS.logo,
            paddingBottom: 10,
            height: 65,
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ title: "Trang chủ" }}
        />
        <Tab.Screen
          name="Search"
          component={FilterStackScreen}
          options={{ title: "Tìm kiếm" }}
        />
        <Tab.Screen
          name="Area"
          component={AreaStackScreen}
          options={{ title: "Khu vực" }}
        />

        <Tab.Screen
          name="WaterAndElectric"
          component={ElecAndWaterStackScreen}
          options={{ title: "Điện nước" }}
        />
      </Tab.Navigator>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => {
          setMessage("student");
        }}
        style={{marginTop: 200}}
      >
        <Text>ACN</Text>
      </TouchableOpacity>
    );
  }
};

export default MyTabs;
