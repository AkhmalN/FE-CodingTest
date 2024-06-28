import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { validPhotoUrl } from "../utils/validImage";

const FragmentContacts = ({ firstName, lastName, photo, age, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Detail", {
          contact_id: id,
        });
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginHorizontal: 2, marginVertical: 4 }}>
          <Image
            source={
              validPhotoUrl(photo)
                ? { uri: photo }
                : require("../../assets/user_not_found.png")
            }
            style={{ width: 80, height: 80, borderRadius: 50 }}
          />
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {firstName}
            {lastName}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "grey" }}>
            {age}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FragmentContacts;
