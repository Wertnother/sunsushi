import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, parameters } from "../global/styles";
import { Ionicons } from "@expo/vector-icons";
import { withBadge } from "@rneui/themed";

export default function HomeHeader({ navigation }) {
  const BadgeIcon = withBadge(0)(Ionicons);

  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
        }}
      >
        <Ionicons
          name="menu-outline"
          size={32}
          color={colors.cardbackground}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          SUNSUSHI
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15,
        }}
      >
        <BadgeIcon
          name="cart-outline"
          size={32}
          color={colors.cardbackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.main,
    height: parameters.headerHeight,
    justifyContent: "space-between",
  },
});
