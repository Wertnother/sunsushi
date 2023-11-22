import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty } from "../reducers/CartReducer";
import {
  decrementQuantity,
  incrementQuantity,
} from "../reducers/ProductReducer";
import { colors } from "../global/styles";

export default function CartItem({ item, index }) {
  const dispatch = useDispatch();
  const totalPrice = item.price * item.quantity;

  const decrementQtyAndQuantity = () => {
    dispatch(decrementQty(item));
    if (item.id !== 999) dispatch(decrementQuantity(item));
  };

  const incrementQtyAndQuantity = () => {
    dispatch(incrementQty(item));
    if (item.id !== 999) dispatch(incrementQuantity(item));
  };

  return (
    <View key={index} style={styles.itemContainer}>
      <View style={styles.itemImageContainer}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
      </View>

      <View style={styles.itemDetailsContainer}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <View style={styles.itemPriceContainer}>
          <View
            style={{
              flex: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.itemPrice}>{totalPrice} ₴</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Pressable onPress={decrementQtyAndQuantity}>
              <Text style={styles.quantityButton}>-</Text>
            </Pressable>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <Pressable onPress={incrementQtyAndQuantity}>
              <Text style={styles.quantityButton}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.grey4,
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    backgroundColor: "white",
  },
  itemImageContainer: {
    flex: 1,
    marginRight: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "contain",
  },
  itemDetailsContainer: {
    flex: 3,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  itemPrice: {
    fontSize: 24,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.main,
    borderRadius: 12,
    width: 120,
    padding: 5,
  },
  quantityButton: {
    fontSize: 25,
    color: "white",
    paddingHorizontal: 20,
  },
  quantityText: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 10,
  },
});
