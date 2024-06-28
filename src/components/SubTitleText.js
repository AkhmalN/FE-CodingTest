import { View, Text } from "react-native";
import React from "react";

const SubTitleText = ({ Title, color, size }) => {
  return (
    <View>
      <Text style={{ color: color, fontSize: size }}>{Title}</Text>
    </View>
  );
};

export default SubTitleText;
