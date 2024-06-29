import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { THEME } from "../constant/Color";

const Profil = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require("../../assets/logo_onboarding.png")}
        style={styles.header}
      >
        <Image
          source={require("../../assets/user_not_found.png")}
          style={styles.avatar}
        />
        <Text style={styles.title}>Avlin Thomus</Text>
        <Text style={styles.caption}>New York</Text>
      </ImageBackground>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Avlin Thomus</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>Avlin_tms@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Password</Text>
          <Text style={styles.value}>********</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>User ID</Text>
          <Text style={styles.value}>22200</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Zip Code</Text>
          <Text style={styles.value}>08817</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  caption: {
    fontSize: 18,
    color: "#fff",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  row: {
    flexDirection: "column",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 25,
    color: THEME.primary,
  },
  value: {
    fontSize: 20,
  },
});

export default Profil;
