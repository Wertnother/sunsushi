import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, Pressable, StyleSheet, Touchable } from "react-native";
import { parameters } from "../global/styles";

export default function Button(props) {
  const { icon, onPress, title = "Save" } = props;
  return (
    <TouchableOpacity
      style={{ ...parameters.mainButtonStyle, flexDirection: "row" }}
      onPress={onPress}
    >
      {icon}
      <Text style={parameters.mainButtonTitleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
