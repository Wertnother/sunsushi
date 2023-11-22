import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../global/styles";
import Header from "../components/Header";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import { packet } from "../global/Data";
import { addToCart } from "../reducers/CartReducer";

export default function Cart({ navigation }) {
  const [isPack, setIsPack] = useState(false);
  const [hasAddedToCart, setHasAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  let totalAmount = 0;
  cart.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });

  const renderItem = ({ item, index }) => (
    <CartItem key={index} item={item} index={index} />
  );

  useEffect(() => {
    if (cart.length > 0 && !hasAddedToCart) {
      dispatch(addToCart(packet));
      setHasAddedToCart(true);
    }
  }, [cart, hasAddedToCart]);

  return (
    <View style={styles.container}>
      <Header
        title={"Кошик"}
        navigation={navigation}
        type={"arrow-back-outline"}
      />
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

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
