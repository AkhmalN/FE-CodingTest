import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Home from "../screens/Home";
import OnBoarding from "../screens/OnBoarding";
import TabNavigator from "./TabNavigator";
import Search from "../screens/Search";
import ICONS from "../constant/Icon";
import HeaderBack from "../components/HeaderBack";
import Profil from "../screens/Profil";
import { THEME } from "../constant/Color";
import Login from "../screens/Login";
import Register from "../screens/Register";
import EditContact from "../screens/EditContact";
import ModalDelete from "../components/ModalDelete";

const Stack = createStackNavigator();

function StackNavigator() {
  const [visibleDelete, setVisibleDelete] = React.useState(false);

  return (
    <Stack.Navigator initialRouteName="OnBoarding">
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ navigation, route }) => ({
          headerBackImage: () => <HeaderBack />,
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
                alignItems: "center",
              }}
            >
              <ModalDelete
                visible={visibleDelete}
                onCancel={() => setVisibleDelete(false)}
                id={route.params.contact_id}
              />
              <TouchableOpacity
                style={{ marginHorizontal: 10 }}
                onPress={() => setVisibleDelete(true)}
              >
                <ICONS.Feather name="trash-2" color={THEME.primary} size={30} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EditContact", {
                    contact_id: route.params.contact_id,
                  })
                }
              >
                <ICONS.FontAwesome
                  name="pencil-square"
                  color={THEME.primary}
                  size={40}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="EditContact"
        component={EditContact}
        options={({ navigation, route }) => ({
          headerBackImage: () => <HeaderBack />,
          headerTitle: "Edit Contact",
        })}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerBackImage: () => <HeaderBack />,
          headerTitle: "Search contacts",
        }}
      />
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{
          headerBackImage: () => <HeaderBack />,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
