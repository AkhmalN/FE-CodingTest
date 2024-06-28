import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TEXT, THEME } from "../constant/Color";
import { useNavigation } from "@react-navigation/native";

const ButtonOnBoarding = ({
  bgColor,
  bdColor,
  navigate,
  title,
  isLogin,
  isRegister,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigate)}
      style={{
        backgroundColor: bgColor,
        width: "80%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderColor: bgColor ? "" : bdColor,
        borderWidth: bgColor ? 0 : 1,
        marginBottom: 10,
      }}
    >
      {isRegister && (
        <Text style={{ fontSize: 20, color: isRegister && TEXT.primary }}>
          {title}
        </Text>
      )}
      {isLogin && (
        <Text style={{ fontSize: 20, color: isLogin && TEXT.light }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonOnBoarding;
