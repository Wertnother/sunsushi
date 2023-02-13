import { Icon } from "@rneui/themed";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import { colors } from "../global/styles";
import { filterData, sushiAndRollsCard } from "../global/Data";
import FoodCard from "../components/FoodCard";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const [indexCheck, setIndexCheck] = useState("0");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader navigation={navigation} />

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>22 Street</Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>Now</Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-community"
              name="tune"
              color={colors.grey1}
              size={26}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          </View>
        </View>

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
          {sushiAndRollsCard.map((item, index) => (
            <View
              key={index}
              style={{ marginTop: 10, marginBottom: 10, marginVertical: 10 }}
            >
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.9}
                image={item.image}
                name={item.name}
                ingredients={item.ingredients}
                price={item.price}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.floatButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AboutUs");
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
  filterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  clockView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginRight: 20,
  },
  addressView: {
    flexDirection: "row",
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: "space-between",
    paddingHorizontal: 20,
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
