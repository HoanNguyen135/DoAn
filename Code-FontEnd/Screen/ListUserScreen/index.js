import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { UserGrid, Loading } from "../../component";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector, useDispatch } from "react-redux";
import { fetchListUser } from "../../store/slices/user";

const ListUserScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const update = useSelector((states) => states.User.update);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListUser()).then((res) => {
      if (!res.error) {
        setLoading(false);
        setData(res.payload.data);
      }
    });
  }, [update]);

  const showListUser = ({ item }) => {
    return <UserGrid data={item} />;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.layoutTitle}>
          <View style={styles.column}>
            <Text style={styles.layoutTextHeader}>TT</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.layoutTextHeader}>Tên tài khoản</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.layoutTextHeader}>Chức vụ</Text>
          </View>
          <View style={[styles.column, styles.boxIcon]}>
            <View style={styles.column}>
              <Text style={styles.layoutTextHeader}>HĐ</Text>
            </View>
          </View>
        </View>
        <FlatList
          listKey={(item) => item.id.toString()}
          renderItem={showListUser}
          data={data}
        />
      </View>
    </ScrollView>
  );
};

export default ListUserScreen;
