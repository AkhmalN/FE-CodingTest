import { View, Text, Image } from "react-native";
import React from "react";
import { validPhotoUrl } from "../utils/validImage";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CardContacts = ({ firstName, lastName, photo, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      style={{ width: 120, height: 150 }}
      onPress={() => {
        navigation.navigate("Detail", {
          contact_id: id,
        });
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={
            validPhotoUrl(photo)
              ? { uri: photo }
              : require("../../assets/user_not_found.png")
          }
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 17, fontWeight: "bold", textAlign: "center" }}>
          {firstName} {lastName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardContacts;
