import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  FlatList,
  ScrollView,
  Animated,
  Easing,
} from "react-native";
import Button from "../Button";
import { colors } from "../../global/styles";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reducers/CartReducer";
import { pizzasAdds } from "../../global/Data";

export default function FoodCard({ item }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(
    (item.size && item.size[0]) || null
  );
  const [currentPrice, setCurrentPrice] = useState(
    (item.priceBySize && item.priceBySize[0]) || 0
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPizzas, setSelectedPizzas] = useState([]);
  const [sumAdds, setSumAdds] = useState(0);
  const [animation] = useState(new Animated.Value(0));

  const addItemToCart = () => {
    dispatch(
      addToCart({
        ...item,
        size: selectedSize,
        price: currentPrice > 0 ? currentPrice + sumAdds : item.price,
      })
    );
    setModalVisible(false);
    setSumAdds(0);
    setSelectedPizzas([]);

    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      // Reset animation
      animation.setValue(0);
    });
  };

  const renderModalContent = (item) => (
    <View style={modal.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(false)}
        style={modal.closeButton}
      >
        <Ionicons name="close-outline" size={24} color={colors.black} />
      </TouchableOpacity>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image style={modal.image} source={{ uri: item.image }} />

          <View style={modal.txtInfo}>
            <View>
              <Text style={modal.name}>{item.name}</Text>
            </View>

            <View style={modal.ingredients}>
              <Text style={modal.ingredientsText}>{item.ingredients}</Text>
            </View>

            {item.size ? (
              <View style={modal.pizzasSize}>
                {item.size.map((size, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      modal.sizeButton,
                      selectedSize === size && styles.selectedSizeButton,
                    ]}
                    onPress={() => handleSizeChange(size)}
                  >
                    <Text
                      style={[
                        modal.sizeButtonText,
                        selectedSize === size && styles.selectedSizeButtonText,
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}

            {item.size ? (
              <View style={modal.pizzasAddsContainer}>
                <View style={modal.pizzasAddsTitle}>
                  <Text style={modal.pizzasAddsTitleText}>Додати в піццу</Text>
                  <Text>{selectedPizzas.length} / 5</Text>
                </View>

                <FlatList
                  data={pizzasAdds}
                  keyExtractor={(item) => item.id}
                  renderItem={renderPizzasItem}
                  horizontal={true}
                />
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>

      <View style={modal.footer}>
        <View style={modal.price}>
          <Text style={modal.priceText}>
            {item.priceBySize ? currentPrice + sumAdds : item.price} ₴
          </Text>
        </View>

        <View style={modal.button}>
          <Button
            onPress={() => addItemToCart(item)}
            icon={
              <Ionicons
                name="cart-outline"
                size={13}
                color={colors.cardbackground}
              />
            }
            title="В кошик"
            style={modal.buttonText}
          />
        </View>
      </View>
    </View>
  );

  const handleSizeChange = (size) => {
    const index = item.size.indexOf(size);
    setCurrentPrice(item.priceBySize[index]);
    setSelectedSize(size);
  };

  const renderPizzasItem = ({ item }) => {
    const handleSelect = () => {
      if (selectedPizzas.includes(item)) {
        setSelectedPizzas(selectedPizzas.filter((pizza) => pizza !== item));
        setSumAdds(sumAdds - item.price);
      } else if (selectedPizzas.length < 5) {
        setSelectedPizzas([...selectedPizzas, item]);
        setSumAdds(sumAdds + item.price);
      }
    };

    const isSelected = selectedPizzas.includes(item);

    return (
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          margin: 5,
          width: 110,
          height: 130,
          borderColor: isSelected ? "red" : "transparent",
          borderWidth: isSelected ? 2 : 0,
          borderRadius: isSelected ? 12 : 0,
        }}
        onPress={handleSelect}
      >
        {isSelected && (
          <View
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              backgroundColor: "white",
            }}
          >
            <Text style={{ color: "red", fontWeight: "bold" }}>✓</Text>
          </View>
        )}
        <Image
          source={item.image}
          style={{ width: 50, height: 50, resizeMode: "contain" }}
        />
        <Text style={{ marginTop: 8 }}>{item.name}</Text>
        <Text style={{ marginTop: 8 }}>{item.price} ₴</Text>
      </TouchableOpacity>
    );
  };

  function handleCardPress() {
    setModalVisible(true);
  }

  function shouldRenderIngredients(item) {
    return item.ingredients.length < 120;
  }

  function shouldRenderSizes(item) {
    return item.size != null && item.size.length > 0;
  }

  function renderSizeButton(size, index) {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.sizeButton,
          selectedSize === size && styles.selectedSizeButton,
        ]}
        onPress={() => handleSizeChange(size)}
      >
        <Text
          style={[
            styles.sizeButtonText,
            selectedSize === size && styles.selectedSizeButtonText,
          ]}
        >
          {size}
        </Text>
      </TouchableOpacity>
    );
  }

  function getCurrentPrice(item) {
    return item.priceBySize ? currentPrice : item.price;
  }

  function getButtonAnimationStyle() {
    return {
      transform: [
        {
          scale: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.5],
          }),
        },
      ],
    };
  }

  function handleModalClose() {
    setModalVisible(false);
  }

  return (
    <TouchableOpacity style={styles.card} onPress={handleCardPress}>
      <Image style={styles.image} source={{ uri: item.image }} />

      <View style={styles.txtInfo}>
        <Text style={styles.name}>{item.name}</Text>

        {shouldRenderIngredients(item) && (
          <View style={styles.ingredients}>
            <Text style={styles.ingredientsText}>{item.ingredients}</Text>
          </View>
        )}

        {shouldRenderSizes(item) && (
          <View style={styles.pizzasSize}>
            {item.size.map(renderSizeButton)}
          </View>
        )}

        <View style={styles.footer}>
          <View style={styles.price}>
            <Text style={styles.priceText}>{getCurrentPrice(item)} ₴</Text>
          </View>

          <View style={styles.button}>
            <Animated.View style={getButtonAnimationStyle()}>
              <TouchableOpacity style={styles.buttonText}>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="cart-outline"
                    size={12}
                    color={colors.cardbackground}
                  />

                  <Text style={styles.buttonText}>В кошик</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        {renderModalContent(item)}
      </Modal>
    </TouchableOpacity>
  );
}

const modal = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  txtInfo: {
    marginHorizontal: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  ingredients: {
    marginBottom: 20,
  },
  ingredientsText: {
    fontSize: 16,
  },
  pizzasSize: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  sizeButton: {
    backgroundColor: "#ddd",
    borderRadius: 12,
    padding: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  sizeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pizzasAddsContainer: {
    height: 170,
    marginVertical: 10,
  },
  pizzasAddsTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  pizzasAddsTitleText: { fontWeight: "bold", fontSize: 16 },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  price: {
    backgroundColor: "#ddd",
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    marginLeft: 10,
    flex: 1,
  },
  buttonText: {
    paddingLeft: 10,
    color: colors.cardbackground,
    fontWeight: "bold",
    fontSize: 16,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginRight: 30,
    marginTop: 30,
    backgroundColor: "#ddd",
    borderRadius: 15,
    padding: 1,
  },
});

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
    height: 190,
  },
  image: {
    width: 170,
    height: "100%",
    resizeMode: "contain",
    marginRight: 10,
  },
  txtInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ingredients: {
    marginBottom: 5,
  },
  ingredientsText: {
    color: "#555",
    fontSize: 12,
  },
  pizzasSize: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  sizeButton: {
    backgroundColor: "#ddd",
    borderRadius: 12,
    padding: 5,
    marginRight: 5,
  },
  sizeButtonText: { fontSize: 13, fontWeight: "bold" },
  selectedSizeButton: {
    backgroundColor: colors.main,
  },
  selectedSizeButtonText: {
    color: "#fff",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    backgroundColor: "#ddd",
    borderRadius: 12,
    padding: 5,
    marginRight: 10,
  },
  priceText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    padding: 7,
    borderRadius: 12,
    backgroundColor: "#da251c",
  },
  buttonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    paddingLeft: 5,
  },
});
