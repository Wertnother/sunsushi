import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutUsScreen from "../screens/AboutUsScreen";
import ClientTabs from "./ClientTabs";
import EditAccountScreen from "../screens/EditAccountScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

const App = createNativeStackNavigator();

export default function AppStack() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="ClientTabs" component={ClientTabs} />
      <App.Screen name="AboutUsScreen" component={AboutUsScreen} options={{}} />
      <App.Screen name="EditAccountScreen" component={EditAccountScreen} />
      <App.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </App.Navigator>
  );
}
