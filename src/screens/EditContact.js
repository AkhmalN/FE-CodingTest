import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TEXT, THEME } from "../constant/Color";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactDetail, updateContact } from "../redux/actions/actions";
import Loader from "../components/Loader";
import { useNavigation } from "@react-navigation/native";
import ModalUpdate from "../components/ModalUpdate";
import * as ImagePicker from "expo-image-picker";

const EditContact = ({ route }) => {
  const navigation = useNavigation();
  const { contact_id } = route.params;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState(null);
  const [errorField, setErrorField] = useState({});
  const [updateVisible, setUpdateVisible] = useState(false);

  let dispatch = useDispatch();
  const { contact, loading, error } = useSelector((state) => state.contacts);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  useEffect(() => {
    dispatch(fetchContactDetail(contact_id));
  }, [dispatch, contact_id]);

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setAge(contact.age ? contact.age.toString() : 0);
      setPhoto(contact.photo);
    }
  }, [contact]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImageAsync}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Text>Select an Image</Text>
          </View>
        )}
      </TouchableOpacity>
      <Text style={{ fontSize: 18, marginVertical: 6 }}>First name : </Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />
      {errorField.firstName && (
        <Text style={styles.error}>{errorField.firstName}</Text>
      )}
      <Text style={{ fontSize: 18, marginVertical: 6 }}>Last name : </Text>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />
      {errorField.lastName && (
        <Text style={styles.error}>{errorField.lastName}</Text>
      )}
      <Text style={{ fontSize: 18, marginVertical: 6 }}>Age : </Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      {errorField.age && <Text style={styles.error}>{errorField.age}</Text>}
      <TouchableOpacity
        onPress={() => setUpdateVisible(true)}
        style={{
          backgroundColor: THEME.primary,
          width: "100%",
          height: 55,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: TEXT.light }}>Save</Text>
      </TouchableOpacity>
      <ModalUpdate
        visible={updateVisible}
        onCancel={() => setUpdateVisible(false)}
        contact_id={contact_id}
        firstName={firstName}
        lastName={lastName}
        age={age}
        photo={photo}
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

export default EditContact;
