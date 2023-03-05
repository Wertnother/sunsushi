import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import HomeHeader from "../components/Homescreen/HomeHeader";
import { filterData } from "../global/Data";
import FoodCard from "../components/Homescreen/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/ProductReducer";
import MenuFlatList from "../components/Homescreen/MenuFlatList";
import { BanerList } from "../components/Homescreen/BanerList";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const [indexCheck, setIndexCheck] = useState(0);
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const scrollViewRef = useRef(null);
  const [isBanerListVisible, setIsBanerListVisible] = useState(true);

  useEffect(() => {
    if (products.length > 0) return;

    const fetchProducts = () => {
      filterData.forEach((item) =>
        item.category.forEach((image) => dispatch(getProducts(image)))
      );
    };
    fetchProducts();
  }, []);

  const MemoizedFoodCard = React.memo(
    ({ item }) => <FoodCard item={item} screenWidth={SCREEN_WIDTH * 0.9} />,
    (prevProps, nextProps) => {
      // Only re-render when item props has changed
      return prevProps.item.id === nextProps.item.id;
    }
  );

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />

      {isBanerListVisible && (
        <View>
          <BanerList />
        </View>
      )}

      <View>
        <MenuFlatList
          filterData={filterData}
          products={products}
          setIndexCheck={setIndexCheck}
          scrollViewRef={scrollViewRef}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={(event) => {
          const offsetY = event.nativeEvent.contentOffset.y;
          if (offsetY > 0 && isBanerListVisible) {
            setIsBanerListVisible(false);
          } else if (offsetY === 0 && !isBanerListVisible) {
            setIsBanerListVisible(true);
          }
        }}
      >
        <View style={styles.itemContainer}>
          {products.map((item) => (
            <MemoizedFoodCard key={item.id} item={item} />
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
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
