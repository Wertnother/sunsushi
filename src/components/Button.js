import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { parameters } from "../global/styles";

export default function Button(props) {
  const { icon, onPress, title = "Save" } = props;
  return (
    <Pressable
      style={{ ...parameters.mainButtonStyle, flexDirection: "row" }}
      onPress={onPress}
    >
      {icon}
      <Text style={parameters.mainButtonTitleStyle}>{title}</Text>
    </Pressable>
  );
}
