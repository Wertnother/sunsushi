import React from "react";
import { Image, Pressable, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrementQty, incrementQty } from "../reducers/CartReducer";
import {
  decrementQuantity,
  incrementQuantity,
} from "../reducers/ProductReducer";
import { colors } from "../global/styles";
import Header from "../components/Header";
import { ScrollView } from "react-native";
import Button from "../components/Button";

export default function Cart({ navigation }) {
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
    const totalPrice = item.price * item.quantity;
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
              <Pressable onPress={() => decrementQtyAndQuantity(item)}>
                <Text style={styles.quantityButton}>-</Text>
              </Pressable>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <Pressable onPress={() => incrementQtyAndQuantity(item)}>
                <Text style={styles.quantityButton}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Header
        title={"Кошик"}
        navigation={navigation}
        type={"arrow-back-outline"}
      />
      <ScrollView>
        <View>{cart.map(renderCartItem)}</View>
      </ScrollView>
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountText}>
          Загальна сума: {totalAmount} ₴
        </Text>
        <Button title="Замовити" onPress={() => console.log(cart)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  totalAmountContainer: {
    bottom: 10,
    width: "95%",
    alignContent: "flex-end",
    marginHorizontal: 10,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.grey4,
    backgroundColor: "white",
  },
  totalAmountText: {
    fontSize: 26,
    fontWeight: "bold",
  },
});
