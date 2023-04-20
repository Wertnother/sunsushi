import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import HomeHeader from "../components/Homescreen/HomeHeader";
import { filterData } from "../global/Data";
import FoodCard from "../components/Homescreen/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/ProductReducer";
// import MenuFlatList from "../components/Homescreen/MenuFlatList";
import { BanerList } from "../components/Homescreen/BanerList";
import { colors } from "../global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = 191;

export default function HomeScreen({ navigation }) {
  const [indexCheck, setIndexCheck] = useState(0);
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const scrollViewRef = useRef(null);
  const flatListRef = useRef(null);
  const [isBanerListVisible, setIsBanerListVisible] = useState(true);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const visibleIndex = Math.floor(yOffset / ITEM_HEIGHT);
    const visibleItem = products[visibleIndex];
    if (selectedItemIndex === -1 || selectedItemIndex !== visibleIndex) {
      setIndexCheck(visibleItem.id);
    }
  };

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
    ({ item }) => <FoodCard item={item} />,
    (prevProps, nextProps) => {
      // Only re-render when item props has changed
      return prevProps.item.id === nextProps.item.id;
    }
  );

  const MenuFlatList = () => {
    const handlePress = (item) => {
      if (selectedItemIndex !== item.id) {
        setSelectedItemIndex(item.id);
        setIndexCheck(item.id);
        scrollViewRef.current.scrollTo({
          y: products.findIndex((p) => p.id === item.id) * ITEM_HEIGHT,
          animated: true,
          viewPosition: 0.5,
        });
      }
    };

    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={filterData}
        keyExtractor={(item) => item.id}
        ref={flatListRef}
        extraData={indexCheck}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handlePress(item)}>
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
    );
  };

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />

      <View>
        <MenuFlatList
          filterData={filterData}
          products={products}
          setIndexCheck={setIndexCheck}
          scrollViewRef={scrollViewRef}
        />
      </View>

      <ScrollView
        style={styles.itemContainer}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={handleScroll}
      >
        <View style={styles.itemContainer}>
          {products.map((item, index) => (
            <React.Fragment key={item.id}>
              <MemoizedFoodCard item={item} />
              {index !== products.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  itemContainer: { width: SCREEN_WIDTH * 0.95, alignSelf: "center" },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: colors.grey4,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 40,
    margin: 10,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 40,
    marginVertical: 10,
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
