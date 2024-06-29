import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { validPhotoUrl } from "../utils/validImage";

const ContactList = ({ contacts }) => {
  const navigation = useNavigation();

  const handleContactPress = (contact_id) => {
    navigation.navigate("Detail", {
      contact_id: contact_id,
    });
  };

  return (
    <View style={styles.list}>
      {contacts.map((contact, id) => (
        <TouchableOpacity
          key={id}
          style={styles.contactItem}
          onPress={() => handleContactPress(contact.id)}
        >
          <Image
            source={
              validPhotoUrl(contact.photo)
                ? { uri: contact.photo }
                : require("../../assets/user_not_found.png")
            }
            style={{ width: 60, height: 60, borderRadius: 50, marginRight: 10 }}
          />
          <View style={styles.contactDetails}>
            <Text style={styles.contactName}>
              {contact.firstName} {contact.lastName}
            </Text>
            <Text style={styles.contactAge}>Age: {contact.age}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 10,
  },
  contactItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 10,
  },
  contactDetails: {
    justifyContent: "center",
  },
  contactName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contactAge: {
    fontSize: 16,
    color: "#666",
  },
});

export default ContactList;
