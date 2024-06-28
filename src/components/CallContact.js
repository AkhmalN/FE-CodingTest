import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { validPhotoUrl } from "../utils/validImage";

const CallContact = ({ status, firstName, lastName, photo }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginRight: 10 }}>
        <Image
          source={
            validPhotoUrl(photo)
              ? { uri: photo }
              : require("../../assets/user_not_found.png")
          }
          style={{ width: 60, height: 60, borderRadius: 50 }}
        />
      </View>
      <View style={styles.callerInfo}>
        <Text style={styles.callerName}>
          {firstName}
          {""}
          {lastName}
        </Text>
        <Text style={styles.phoneNumber}>+649237987328</Text>
      </View>
      <View style={styles.callDetails}>
        <Text
          style={{
            fontSize: 19,
            color: status === "Incoming call" ? "#007AFF" : "red",
          }}
        >
          {status}
        </Text>
        <Text style={styles.callTime}>26 jun</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  callerInfo: {
    flex: 1,
    marginRight: 12,
  },
  callDetails: {
    alignItems: "flex-end",
  },
  callerName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  phoneNumber: {
    fontSize: 18,
    color: "#666",
    marginTop: 2,
  },
  callTime: {
    fontSize: 18,
    color: "#999",
    marginTop: 2,
  },
});

export default CallContact;
