import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { ElectricGrid,WaterGrid } from "../../component";
import { ScrollView } from 'react-native-virtualized-view'

const data = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
];

const data1 = [
  {
    name: "11",
  },
  {
    name: "12",
  },
  {
    name: "13",
  },
  {
    name: "14",
  },
  {
    name: "15",
  },
];

const WaterAndElectric = () => {
  const showElectricGrid = () => {
    return <ElectricGrid />;
  };

  const showWaterGrid = () => {
    return <WaterGrid />;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.layout}>
          <View style={styles.layoutTitle}>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>TT</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Phòng</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>CS đầu</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>CS cuối</Text>
            </View>
            <View style={styles.column}>
              <Text style={[styles.layoutTextHeader, { fontSize: 13.8 }]}>
                Tổng tiền
              </Text>
            </View>
            <View style={[styles.column, styles.boxIcon]}>
              <View style={styles.column}>
                <Text style={styles.layoutTextHeader}>HĐ</Text>
              </View>
            </View>
          </View>
          <FlatList
            listKey={(item) => item.id.toString()}
            renderItem={showElectricGrid}
            data={data}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.layout}>
          <View style={styles.layoutTitle}>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>TT</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>Phòng</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>CS đầu</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>CS cuối</Text>
            </View>
            <View style={styles.column}>
              <Text style={[styles.layoutTextHeader, { fontSize: 13.8 }]}>
                Tổng tiền
              </Text>
            </View>
            <View style={[styles.column, styles.boxIcon]}>
              <View style={styles.column}>
                <Text style={styles.layoutTextHeader}>HĐ</Text>
              </View>
            </View>
          </View>
          <FlatList
            listKey={(item) => item.name.toString()}
            renderItem={showWaterGrid}
            data={data1}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default WaterAndElectric;
