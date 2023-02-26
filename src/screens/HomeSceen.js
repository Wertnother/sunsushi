import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import HomeHeader from "../components/Homescreen/HomeHeader";
import { colors } from "../global/styles";
import { filterData } from "../global/Data";
import FoodCard from "../components/Homescreen/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, clearProducts } from "../reducers/ProductReducer";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = 460;

export default function HomeScreen({ navigation }) {
  const [indexCheck, setIndexCheck] = useState("0");
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (products.length > 0) return;

    const fetchProducts = () => {
      filterData.map((item) =>
        item.category.map((image) => dispatch(getProducts(image)))
      );
    };
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />

      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Меню</Text>
      </View>

      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={filterData}
          keyExtractor={(item) => item.id}
          extraData={indexCheck}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => {
                setIndexCheck(item.id);
                scrollViewRef.current.scrollTo({
                  y: products.findIndex((p) => p.id === item.id) * ITEM_HEIGHT,
                  animated: true,
                });
              }}
            >
              <View
                style={
                  indexCheck === item.id
                    ? { ...styles.smallCardSelected }
                    : { ...styles.smallCard }
                }
              >
                <View>
                  <Text
                    style={
                      indexCheck === item.id
                        ? { ...styles.smallCardTextSelected }
                        : { ...styles.smallCardText }
                    }
                  >
                    {item.name}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {products.map((item, index) => (
            <FoodCard
              item={item}
              key={index}
              screenWidth={SCREEN_WIDTH * 0.9}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  headerTextView: { backgroundColor: colors.grey5, paddingVertical: 3 },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 110,
    height: 50,
    margin: 10,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 110,
    height: 50,
    margin: 10,
  },
  smallCardTextSelected: {
    fontWeight: "bold",
    color: colors.cardbackground,
    textAlign: "center",
  },
  smallCardText: {
    fontWeight: "bold",
    color: colors.grey2,
    textAlign: "center",
  },
});
