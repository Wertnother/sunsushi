import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Button from "../components/Button";
import { colors } from "../global/styles";
import { Ionicons } from "@expo/vector-icons";

export default function FoodCard({
  name,
  ingredients,
  price,
  image,
  screenWidth,
}) {
  return (
    <View style={{ ...styles.card, width: screenWidth }}>
      <Image style={styles.image} source={{ uri: image }} />

      <View>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.ingredients}>
        <Text style={styles.ingredientsText}>{ingredients}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.price}>
          <Text style={styles.priceText}>{price}</Text>
        </View>
        <View style={styles.button}>
          <Button
            icon={
              <Ionicons
                name="cart-outline"
                size={24}
                color={colors.cardbackground}
              />
            }
            title="В кошик"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: colors.grey4,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  image: {
    marginHorizontal: 10,
    borderRadius: 5,
    height: 235,
    width: "100%",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ingredients: {
    marginTop: 10,
  },
  ingredientsText: {
    fontSize: 15,
    color: colors.grey2,
  },
  footer: {
    flexDirection: "row",
    marginTop: 10,
  },
  price: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  priceText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  button: {
    flex: 6,
    justifyContent: "center",
  },
});
