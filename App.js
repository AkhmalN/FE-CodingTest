// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigations/ScreenNavigator";
import "react-native-reanimated";
import "react-native-gesture-handler";

import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}