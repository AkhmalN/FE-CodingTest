import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { ICON, THEME } from "../constant/Color";
import {
  AntDesign,
  Feather,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import ICONS from "../constant/Icon";
import { useNavigation } from "@react-navigation/native";
import Chat from "../screens/Chat";
import Adding from "../screens/Adding";
import Call from "../screens/Call";
import Riwayat from "../screens/Riwayat";
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const navigation = useNavigation();
  const tabBarLabelStyle = {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent = Ionicons;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
            IconComponent = AntDesign;
          } else if (route.name === "Chat") {
            iconName = focused
              ? "chatbubble-ellipses-outline"
              : "chatbubble-ellipses-outline";
            IconComponent = Ionicons;
          } else if (route.name === "Adding") {
            iconName = focused ? "plus" : "plus";
            IconComponent = AntDesign;
            return (
              <View
                style={{
                  backgroundColor: THEME.primary,
                  borderRadius: 25,
                  padding: 10,
                  width: 70,
                  height: 60,
                  marginBottom: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="add-circle-outline"
                  size={35}
                  color={ICON.light}
                />
              </View>
            );
          } else if (route.name === "Call") {
            iconName = focused ? "phone-incoming" : "phone-incoming";
            IconComponent = Feather;
          } else if (route.name === "Riwayat") {
            iconName = focused ? "phone-missed" : "phone-missed";
            IconComponent = Feather;
          }

          return (
            <IconComponent
              name={iconName}
              size={focused ? 35 : 30}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: ICON.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  KontakPlus
                </Text>
              </View>
              <View>
                <ICONS.FontAwesome
                  name="user-circle"
                  color={THEME.primary}
                  size={40}
                  onPress={() => {
                    navigation.navigate("Profil");
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarShowLabel: false,
          headerTitle: "Chats",
          headerTitleStyle: { fontSize: 30 },
        }}
      />
      <Tab.Screen
        name="Adding"
        component={Adding}
        options={{
          tabBarShowLabel: false,
          headerTitle: "New contact",
          headerTitleStyle: { fontSize: 30 },
        }}
      />
      <Tab.Screen
        name="Call"
        component={Call}
        options={{
          tabBarShowLabel: false,
          headerTitle: "Incoming call",
          headerTitleStyle: { fontSize: 30 },
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={Riwayat}
        options={{
          tabBarShowLabel: false,
          headerTitle: "Outgoing call",
          headerTitleStyle: { fontSize: 30 },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
