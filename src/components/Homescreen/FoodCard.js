import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Button from "../Button";
import { colors } from "../../global/styles";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQty,
  incrementQty,
} from "../../reducers/CartReducer";
import {
  incrementQuantity,
  decrementQuantity,
} from "../../reducers/ProductReducer";
import { Pressable } from "react-native";

export default function FoodCard({ item, screenWidth }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(incrementQuantity(item));
  };

  const totalPrice = item.price * item.quantity;

  return (
    <View style={{ ...styles.card, width: screenWidth }}>
      <Image style={styles.image} source={{ uri: item.image }} />

      <View>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <View style={styles.ingredients}>
        <Text style={styles.ingredientsText}>{item.ingredients}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.price}>
          {item.quantity === 0 ? (
            <Text style={styles.priceText}>{item.price} ₴</Text>
          ) : (
            <Text style={styles.priceText}>{totalPrice} ₴</Text>
          )}
        </View>

        {cart.some((value) => value.id === item.id) ? (
          <View style={styles.quantityContainer}>
            <Pressable
              onPress={() => {
                dispatch(decrementQty(item));
                dispatch(decrementQuantity(item));
              }}
            >
              <Text style={styles.quantityButton}>-</Text>
            </Pressable>

            <Text style={styles.quantityText}>{item.quantity}</Text>

            <Pressable
              onPress={() => {
                dispatch(incrementQty(item));
                dispatch(incrementQuantity(item));
              }}
            >
              <Text style={styles.quantityButton}>+</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.button}>
            <Button
              onPress={() => addItemToCart(item)}
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
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderColor: colors.grey4,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 20,
    height: 440,
  },
  image: {
    marginHorizontal: 10,
    borderRadius: 5,
    height: 235,
    width: "100%",
    resizeMode: "contain",
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.main,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 120,
  },
  quantityButton: {
    fontSize: 25,
    color: "white",
  },
  quantityText: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 10,
  },
  button: {
    flex: 6,
    justifyContent: "center",
    width: 120,
  },
});
