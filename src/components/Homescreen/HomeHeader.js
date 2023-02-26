import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, parameters } from "../../global/styles";

export default function HomeHeader({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleDrawerToggle = () => {
    navigation.toggleDrawer();
  };

  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(phoneNumber);
  };

  const renderModalContent = () => (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text
          onPress={() => handlePhonePress("tel:+380962109095")}
          style={styles.modalPnone}
        >
          +38 (096) 210 90 95
        </Text>
        <Text
          onPress={() => handlePhonePress("tel:+380509555249")}
          style={styles.modalPnone}
        >
          +38 (050) 955 52 49
        </Text>
        <Text style={styles.modalText}>10:30 - 21:45</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Закрити</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleDrawerToggle}
        style={styles.iconContainer}
      >
        <MaterialCommunityIcons
          name="menu"
          size={32}
          color={colors.cardbackground}
        />
      </TouchableOpacity>

      <Text style={styles.title}>SUNSUSHI</Text>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons
          name="cellphone"
          size={32}
          color={colors.cardbackground}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {renderModalContent()}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.main,
    height: parameters.headerHeight,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: colors.cardbackground,
    fontSize: 25,
    fontWeight: "bold",
  },
  iconContainer: {
    paddingHorizontal: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 2,
    backgroundColor: colors.main,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalPnone: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 26,
    color: "blue",
    textDecorationLine: "underline",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 26,
  },
});
