import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AboutUsButton() {
  return (
    <View style={styles.floatButton}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AboutUsScreen");
        }}
      >
        <Icon name="place" type="material" size={32} color={colors.main} />
        <Text style={colors.grey2}>Map</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AboutUsButton;

const styles = StyleSheet.create({
  floatButton: {
    position: "absolute",
    bottom: 10,
    right: 15,
    backgroundColor: "white",
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
  },
});
