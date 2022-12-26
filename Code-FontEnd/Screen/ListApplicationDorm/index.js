import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { RegisterDorm } from "../../component";
import ModalDropdown from "react-native-modal-dropdown";
import {
  fetchListApplication,
  fetchNumberPage,
} from "../../store/slices/applicationdorm";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-virtualized-view";

const ListApplicationDorm = () => {
  const dispatch = useDispatch();

  const dataApplicationInPage = useSelector(
    (states) => states.Application.listApplication
  );

  const update = useSelector(
    (states) => states.Application.update
  );

  const route = useRoute();

  const [page, setPage] = useState();

  const handleSelect = (index, value) => {
    setPage(value);
  };

  const [arrPage, setArrPage] = useState([]);

  useEffect(() => {
    dispatch(fetchNumberPage()).then((res) => {
      setArrPage(res.payload.data);
      setPage(res.payload.data[0]);
    });
  }, []);

  useEffect(() => {
    dispatch(fetchListApplication({ current_page: page }));
  }, [page,update]);

  const renderRegisterDorm = ({ item }) => {
    return <RegisterDorm data={item} />;
  };

  return (
    <ScrollView
      style={styles.container}
      //contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <ModalDropdown
        options={arrPage}
        style={styles.modelDrop}
        onSelect={(index, value) => handleSelect(index, value)}
      >
        <Text>{page}</Text>
      </ModalDropdown>
      <FlatList
        style={styles.flatList}
        data={dataApplicationInPage}
        renderItem={renderRegisterDorm}
        keyExtractor={(item) => item.idDonDK.toString()}
      />
    </ScrollView>
  );
};

export default ListApplicationDorm;
