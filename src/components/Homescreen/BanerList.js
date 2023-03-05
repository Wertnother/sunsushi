import React, { useState } from "react";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";
import { banersData } from "../../global/Data";
import { colors } from "../../global/styles";

export const BanerList = () => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={banersData}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <Pressable style={styles.banerContainer}>
          <Text>{item.name}</Text>
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  banerContainer: {
    borderRadius: 25,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 250,
    height: 50,
    marginLeft: 20,
    marginTop: 10,
  },
});
