import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, parameters } from "../global/styles";

export default function Header({ title, type, navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.iconContainer}>
        <Ionicons name={type} size={28} color={colors.headerText} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.main,
    height: parameters.headerHeight,
    paddingLeft: 5,
    alignItems: "center",
  },
  title: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
  iconContainer: {
    padding: 10,
  },
});
