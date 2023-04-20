import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../global/styles";
import HomeScreen from "../screens/HomeSceen";
import Shares from "../screens/Shares";
import CartScreen from "../screens/CartScreen";
import SettingScreen from "../screens/SettingSceen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";

const ClientsTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientsTabs.Navigator
      screenOptions={{ tabBarActiveTintColor: colors.main, headerShown: false }}
    >
      <ClientsTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Меню",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <ClientsTabs.Screen
        name="Shares"
        component={Shares}
        options={{
          header: ({ navigation }) => <Header navigation={navigation} />,
          tabBarLabel: "Акції",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sale" size={size} color={color} />
          ),
        }}
      />

      <ClientsTabs.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: "Кошик",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <ClientsTabs.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: "Налаштування",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-settings-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </ClientsTabs.Navigator>
  );
}
