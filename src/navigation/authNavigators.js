import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingInWelcomeScreen from "../screens/authScreens/SingInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import RootClientTabs from "./ClientTabs";
import AboutUsScreen from "../screens/AboutUsScreen";
import DrawerNavigator from "./DrawerNavigator";
import SignUpScreen from "../screens/authScreens/SignUpScreen";

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SignInWelconeScreen" component={SingInWelcomeScreen} />

      <Auth.Screen name="SignInScreen" component={SignInScreen} />

      <Auth.Screen name="SignUpScreen" component={SignUpScreen} />

      <Auth.Screen name="DrawerNavigator" component={DrawerNavigator} />

      <Auth.Screen name="AboutUsScreen" component={AboutUsScreen} />
    </Auth.Navigator>
  ); // Added missing closing bracket for the return statement
}
