import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Linking,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, parameters } from "../../global/styles";

export default function HomeHeader({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

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
      <View style={styles.headerLogo}>
        <Image
          source={require("../../assets/smallLogo.png")}
          style={styles.logo}
        />
      </View>

      <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
        <MaterialCommunityIcons name="map-marker" size={32} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons name="cellphone" size={32} color="black" />
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
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: parameters.headerHeight,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 15, // додати горизонтальний відступ для контейнера
  },
  headerLogo: {
    flex: 4, // змінити flex на 1, щоб логотип займав 1/3 ширини контейнера
    height: 50,
    paddingVertical: 5,
    paddingRight: 100,
  },
  logo: { width: "100%", height: 40, resizeMode: "contain" },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
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
    textDecorationLine: "underline",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 26,
  },
});
