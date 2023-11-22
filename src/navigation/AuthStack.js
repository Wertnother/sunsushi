import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingInWelcomeScreen from "../screens/authScreens/SingInWelcomeScreen";
import SignInPhoneScreen from "../screens/authScreens/SignInPhoneScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SignInWelconeScreen" component={SingInWelcomeScreen} />

      <Auth.Screen name="SignInPhoneScreen" component={SignInPhoneScreen} />

      <Auth.Screen name="SignInScreen" component={SignInScreen} />
    </Auth.Navigator>
  );
}
