import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutUs from "../screens/AboutUs";
import DrawerNavigator from "./DrawerNavigator";

const App = createNativeStackNavigator();

export default function AppStack() {
  return (
    <App.Navigator>
      <App.Screen name="App" component={DrawerNavigator} />

      <App.Screen name="AboutUs" component={AboutUs} />
    </App.Navigator>
  );
}
