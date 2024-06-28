import { View, Text, Image } from "react-native";
import React from "react";
import TitleText from "../components/TitleText";
import { TEXT, THEME } from "../constant/Color";
import ButtonOnBoarding from "../components/Button";
import SubTitleText from "../components/SubTitleText";

const OnBoarding = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Image source={require("../../assets/logo_onboarding.png")} />
      </View>
      <View style={{ position: "absolute", zIndex: 1, top: "38%", left: "8%" }}>
        <View style={{ marginVertical: 5 }}>
          <TitleText
            Title={"Selamat Datang di KontakPlus!"}
            color={TEXT.light}
            size={40}
          />
        </View>
        <View style={{ marginVertical: 5, alignItems: "center" }}>
          <SubTitleText
            Title={"Kelola dan sinkronkan semua kontak Anda dengan mudah"}
            color={TEXT.light}
            size={20}
          />
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <ButtonOnBoarding
          bgColor={THEME.primary}
          title={"Sudah memiliki akun"}
          navigate={"Login"}
          isLogin={true}
        />
        <ButtonOnBoarding
          bdColor={THEME.primary}
          title={"Buat akun baru"}
          navigate={"Register"}
          isRegister={true}
        />
      </View>
    </View>
  );
};

export default OnBoarding;
