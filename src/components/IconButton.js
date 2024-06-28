import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ IconComponentName, color, iconName, bgColor }) => {
  let IconComponent = IconComponentName;
  return (
    <View
      style={{
        backgroundColor: bgColor,
        paddingHorizontal: 9,
        paddingVertical: 7,
        borderRadius: 10,
        margin: 5,
      }}
    >
      <IconComponent name={iconName} size={30} color={color} />
    </View>
  );
};

export default IconButton;
