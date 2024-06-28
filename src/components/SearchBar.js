import { View, TextInput } from "react-native";
import React from "react";
import ICONS from "../constant/Icon";

const SearchBar = ({ onSearch }) => {
  return (
    <View
      style={{
        margin: 10,
        padding: 5,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View>
        <ICONS.Feather name="search" size={30} />
      </View>
      <TextInput
        style={{
          flex: 1,
          height: 40,
          paddingHorizontal: 10,
          fontSize: 23,
          borderRadius: 10,
        }}
        placeholder="Search..."
        onChangeText={(text) => onSearch(text)}
      />
    </View>
  );
};

export default SearchBar;
