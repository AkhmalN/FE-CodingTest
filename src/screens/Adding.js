import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { ICON, TEXT, THEME } from "../constant/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { createContact } from "../redux/actions/actions";
import ModalAdd from "../components/ModalAdd";

const Adding = ({ route, navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const [errorField, setErrorField] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  let dispatch = useDispatch();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImg(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const validate = () => {
    let valid = true;
    let errorField = {};

    if (!firstName) {
      errorField.firstName = "First name is required";
      valid = false;
    }

    if (!lastName) {
      errorField.lastName = "Last name is required";
      valid = false;
    }

    if (!age) {
      errorField.age = "Age is required";
      valid = false;
    } else if (!Number.isInteger(Number(age))) {
      errorField.age = "Age must be a number";
      valid = false;
    }

    setErrorField(errorField);
    return valid;
  };

  const handleSubmit = async () => {
    if (validate()) {
      const status = dispatch(
        createContact({
          firstName,
          lastName,
          age: age,
          photo: selectedImg,
        })
      );
      if (status) {
        Alert.alert("Success", "Contact added successfully");
        setFirstName("");
        setLastName("");
        setAge("");
        setSelectedImg(null);
        setModalVisible(false);
      } else {
        Alert.alert("Error", "Failed to add contact");
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Image
          source={{ uri: selectedImg }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <MaterialCommunityIcons
          name="pencil-outline"
          size={30}
          color={ICON.light}
          style={{
            position: "absolute",
            bottom: "2%",
            right: "5%",
            backgroundColor: THEME.primary,
            borderRadius: 5,
            paddingVertical: 2,
            paddingHorizontal: 4,
          }}
          onPress={pickImageAsync}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={setFirstName}
        value={firstName}
      />
      {errorField.firstName && (
        <Text style={styles.error}>{errorField.firstName}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={setLastName}
        value={lastName}
      />
      {errorField.lastName && (
        <Text style={styles.error}>{errorField.lastName}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        onChangeText={setAge}
        value={age}
      />
      {errorField.age && <Text style={styles.error}>{errorField.age}</Text>}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          backgroundColor: THEME.primary,
          width: "100%",
          height: 55,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,

          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: TEXT.light }}>Save</Text>
      </TouchableOpacity>
      <ModalAdd
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        handleSubmit={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e1e1e1",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    height: 60,
    borderColor: THEME.primary,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default Adding;
