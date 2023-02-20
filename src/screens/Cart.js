import React from "react";
import { Image, Pressable, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrementQty, incrementQty } from "../reducers/CartReducer";
import {
  decrementQuantity,
  getProducts,
  incrementQuantity,
} from "../reducers/ProductReducer";
import { colors } from "../global/styles";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const decrementQtyAndQuantity = (item) => {
    dispatch(decrementQty(item));
    dispatch(decrementQuantity(item));
  };

  const incrementQtyAndQuantity = (item) => {
    dispatch(incrementQty(item));
    dispatch(incrementQuantity(item));
  };

  const renderCartItem = (item, index) => {
    return (
      <Pressable key={index} style={styles.itemContainer}>
        <View style={styles.itemImageContainer}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
        </View>

        <Pressable style={styles.quantityContainer}>
          <Pressable onPress={() => decrementQtyAndQuantity(item)}>
            <Text style={styles.quantityButton}>-</Text>
          </Pressable>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <Pressable onPress={() => incrementQtyAndQuantity(item)}>
            <Text style={styles.quantityButton}>+</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Page</Text>
      {cart.map(renderCartItem)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 60,
    color: "red",
  },
  itemContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemImageContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF3366",
    borderRadius: 5,
    width: 120,
  },
  quantityButton: {
    fontSize: 25,
    color: "white",
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 10,
  },
});
