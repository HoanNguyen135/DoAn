import React, { useState } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Drawer } from "react-native-paper";
import { View, Text, Image } from "react-native";
import {DrawerItemComponent} from '../../component'

import styles from "./styles";

const DrawerContent = () => {

  const [focus, setFocus] = useState("Home");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <Image
            style={styles.img}
            source={require("../../assets/images/avatar.png")}
          />
        </View>
        <Text style={styles.headerTitle}>Hoan Nguyễn</Text>
      </View>
      <DrawerContentScrollView style={styles.body}>
        <DrawerItemComponent
            name={"HomeScreen"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          <DrawerItemComponent
            name={"ApplicationStackScreen"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          <DrawerItemComponent
            name={"ListInfrastructureScreen"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          <DrawerItemComponent
            name={"LogOut"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Text style={styles.bottomDrawerSectionText}>@CopyRight ZendVN</Text>
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;
