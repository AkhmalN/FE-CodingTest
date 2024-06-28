import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/actions/actions";
import Loader from "../components/Loader";
import ChatItem from "../components/ChatItem";

const Chat = () => {
  let dispatch = useDispatch();
  const navigation = useNavigation();
  const { contacts, loading, error } = useSelector((state) => state.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustContentInsets={true}
      style={styles.container}
    >
      {contacts &&
        contacts.map((row, id) => {
          return (
            <ChatItem
              key={id}
              firstName={row.firstName}
              lastName={row.lastName}
            />
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Chat;
