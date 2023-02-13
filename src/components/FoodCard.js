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
    <TouchableOpacity>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          style={{ ...styles.image, width: "100%" }}
          source={{ uri: image }}
        />

        <View>
          <Text style={styles.nameText}>{name}</Text>
        </View>

        <View style={styles.ingredientsView}>
          <Text style={styles.ingredientsText}>{ingredients}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View
            style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.priceText}>{price}</Text>
          </View>
          <View style={{ flex: 6, justifyContent: "center" }}>
            <Button
              icon={
                <Ionicons
                  name="cart-outline"
                  size={24}
                  color={colors.cardbackground}
                  style={{ marginHorizontal: 10 }}
                />
              }
              title="В кошик"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
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
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ingredientsView: { marginTop: 10 },
  ingredientsText: { fontSize: 15, color: colors.grey2 },
  priceText: { fontSize: 28, fontWeight: "bold" },
});
