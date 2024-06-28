import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import TitleText from "../components/TitleText";
import { TEXT, THEME } from "../constant/Color";
import ButtonOnBoarding from "../components/Button";
import SubTitleText from "../components/SubTitleText";

const Register = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Image source={require("../../assets/logo_onboarding.png")} />
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          top: "38%",
          left: "10%",
          width: "80%",
        }}
      >
        <View style={{ marginVertical: 5 }}>
          <TitleText Title={"Register"} color={TEXT.light} size={40} />
        </View>
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height: 60,
            borderRadius: 20,
            paddingLeft: 15,
            marginTop: 10,
          }}
        >
          <TextInput
            placeholder="Username"
            placeholderTextColor={TEXT.light}
            style={{ paddingVertical: 20, fontSize: 20, color: TEXT.light }}
          />
        </View>
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height: 60,
            borderRadius: 20,
            paddingLeft: 15,
            marginTop: 10,
          }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor={TEXT.light}
            style={{ paddingVertical: 20, fontSize: 20, color: TEXT.light }}
          />
        </View>
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height: 60,
            borderRadius: 20,
            paddingLeft: 15,
            marginTop: 10,
          }}
        >
          <TextInput
            placeholder="Password"
            placeholderTextColor={TEXT.light}
            style={{ paddingVertical: 20, fontSize: 20, color: TEXT.light }}
          />
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <ButtonOnBoarding
          bgColor={THEME.primary}
          title={"Buat akun"}
          navigate={"Main"}
          isLogin={true}
        />
      </View>
    </View>
  );
};

export default Register;
