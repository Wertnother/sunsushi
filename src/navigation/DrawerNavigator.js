import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../global/styles";
import ClientTabs from "../navigation/ClientTabs";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="ClientTabs"
        component={ClientTabs}
        options={{
          title: "Головна",
          drawerIcon: ({ focussed, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size}
              color={focussed ? "#7cc" : colors.grey2}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
