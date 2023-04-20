import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";

export default function Shares({ navigation }) {
  return (
    <View>
      <Header
        title="Ваш заголовок"
        type="ios-arrow-back"
        navigation={navigation}
      />
      <Text>Здесь ваше содержимое экрана</Text>
    </View>
  );
}

Shares.options = {
  header: ({ navigation }) => (
    <Header
      title="Ваш заголовок"
      type="ios-arrow-back"
      navigation={navigation}
    />
  ),
};
