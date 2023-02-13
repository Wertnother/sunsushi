import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingInWelcomeScreen from "../screens/authScreens/SingInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import RootClientTabs from "./ClientTabs";
import AboutUs from "../screens/AboutUs";
import DrawerNavigator from "./DrawerNavigator";

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SignInWelconeScreen" component={SingInWelcomeScreen} />

      <Auth.Screen name="SignInScreen" component={SignInScreen} />

      <Auth.Screen name="DrawerNavigator" component={DrawerNavigator} />

      <Auth.Screen name="AboutUs" component={AboutUs} />
    </Auth.Navigator>
  ); // Added missing closing bracket for the return statement
}
