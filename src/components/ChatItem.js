import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ChatItem = ({ firstName, lastName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>
        {firstName}
        {lastName}
      </Text>
      <Text style={styles.lastMessage}>Hello, how are you?</Text>
      <Text style={styles.timestamp}>10:30 AM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
    justifyContent: "center",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  lastMessage: {
    color: "#555",
    fontSize: 18,
    marginVertical: 2,
  },
  timestamp: {
    color: "#999",
    fontSize: 16,
    textAlign: "right",
  },
});

export default ChatItem;
