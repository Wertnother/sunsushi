import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, parameters } from "../global/styles";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ title, type, navigation }) {
  return (
    <View style={styles.header}>
      <Ionicons
        name={type}
        size={28}
        color={colors.headerText}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.main,
    height: parameters.headerHeight,
    paddingLeft: 20,
    alignItems: "center",
  },

  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
