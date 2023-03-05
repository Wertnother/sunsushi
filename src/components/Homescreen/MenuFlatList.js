import React, { useState } from "react";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";
import { colors } from "../../global/styles";

const ITEM_HEIGHT = 460;

const MenuFlatList = ({ filterData, products, scrollViewRef }) => {
  const [indexCheck, setIndexCheck] = useState(0);

  const handlePress = (item) => {
    setIndexCheck(item.id);
    scrollViewRef.current.scrollTo({
      y: products.findIndex((p) => p.id === item.id) * ITEM_HEIGHT,
      animated: true,
      viewPosition: 0.5,
    });
  };

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={filterData}
      keyExtractor={(item) => item.id}
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

const styles = StyleSheet.create({
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
export default MenuFlatList;
