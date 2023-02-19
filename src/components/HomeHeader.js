import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withBadge } from "@rneui/themed";
import { colors, parameters } from "../global/styles";

export default function HomeHeader({ navigation }) {
  const BadgeIcon = withBadge(0)(Ionicons);

  const handleDrawerToggle = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleDrawerToggle}
        style={styles.iconContainer}
      >
        <Ionicons name="menu-outline" size={32} color={colors.cardbackground} />
      </TouchableOpacity>

      <Text style={styles.title}>SUNSUSHI</Text>

      <TouchableOpacity style={styles.iconContainer}>
        <BadgeIcon
          name="cart-outline"
          size={32}
          color={colors.cardbackground}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.main,
    height: parameters.headerHeight,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: colors.cardbackground,
    fontSize: 25,
    fontWeight: "bold",
  },
  iconContainer: {
    paddingHorizontal: 15,
  },
});
