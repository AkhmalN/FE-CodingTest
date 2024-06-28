import { View, Text } from "react-native";
import React from "react";
import ICONS from "../constant/Icon";

const HeaderCheck = () => {
  return (
    <View
      style={{
        borderColor: "grey",
        borderWidth: 1,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <ICONS.Feather name="check" size={35} color={"grey"} />
    </View>
  );
};

export default HeaderCheck;
