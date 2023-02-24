import { Icon } from "@rneui/themed";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import { colors } from "../global/styles";
import { filterData, setsCard, sushiAndRollsCard } from "../global/Data";
import FoodCard from "../components/FoodCard";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/ProductReducer";
import AddressView from "../components/AddressView";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const [indexCheck, setIndexCheck] = useState("0");
  const [category, setCategory] = useState(sushiAndRollsCard);

  useEffect(() => {
    if (!category) return;

    const fetchProducts = () => {
      category.map((image) => dispatch(getProducts(image)));
    };
    fetchProducts();
  }, [category, dispatch, setCategory]);

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <AddressView />

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
                  setCategory(item.category);
                  setIndexCheck(item.id);
                }}
              >
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }
                >
                  <Image
                    style={{ height: 60, weight: 60, borderRadius: 30 }}
                    source={item.image}
                  />

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
    height: 110,
    margin: 10,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 110,
    height: 110,
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
