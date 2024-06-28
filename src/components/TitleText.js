import { View, Text } from "react-native";
import React from "react";

const TitleText = ({ Title, color, size }) => {
  return (
    <View>
      <Text style={{ color: color, fontSize: size, fontWeight: "bold" }}>
        {Title}
      </Text>
    </View>
  );
};

export default TitleText;
