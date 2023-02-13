import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../global/styles";
import ClientTabs from "../navigation/ClientTabs";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="ClientTabs"
        component={ClientTabs}
        // options={{
        //   title: "Головна",
        //   drawerIcon: ({ focussed, size }) => (
        //     <MaterialCommunityIcons
        //       name="order-bool-ascending"
        //       size={size}
        //       color={focussed ? "#7cc" : colors.grey2}
        //     />
        //   ),
        // }}
      />
    </Drawer.Navigator>
  );
}
