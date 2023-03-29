import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { colors } from "../global/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from "firebase/compat/app";

const SettingsScreen = ({ navigation }) => {
  const [language, setLanguage] = useState("uk");
  const [userName, setUserName] = useState("");
  const email = "support@example.com";

  const user = firebase.auth().currentUser;
  if (user) {
    const uid = user.uid;
    const userName = firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          setUserName(userData.name);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleContactUs = () => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleFacebook = () => {
    Linking.openURL("http://sunsushi.com.ua/#");
  };

  const handleInstagram = () => {
    Linking.openURL("https://www.instagram.com/sun_sushi_/");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="account"
          size={26}
          color={colors.cardbackground}
        />

        <Text style={styles.name}>{userName}</Text>

        <MaterialCommunityIcons
          name="chevron-right-circle-outline"
          size={24}
          color={colors.cardbackground}
          onPress={() => {
            navigation.navigate("EditAccountScreen");
          }}
        />
      </View>

      {/* <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Вибір мови</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleLanguageChange("uk")}
        >
          <Text style={styles.optionText}>Українська</Text>
          {language === "uk" && <Text style={styles.checkmark}>✔</Text>}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleLanguageChange("en")}
        >
          <Text style={styles.optionText}>English</Text>
          {language === "en" && <Text style={styles.checkmark}>✔</Text>}
        </TouchableOpacity>
      </View> */}

      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Основна інформація</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("AboutUsScreen")}
        >
          <Text style={styles.optionText}>Про нас</Text>
          <MaterialCommunityIcons
            name="chevron-right-circle-outline"
            size={20}
            color={colors.grey2}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleContactUs}>
          <Text style={styles.optionText}>Зв'язатися з нами</Text>
          <MaterialCommunityIcons
            name="chevron-right-circle-outline"
            size={20}
            color={colors.grey2}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Повідомлення</Text>
          <MaterialCommunityIcons
            name="chevron-right-circle-outline"
            size={20}
            color={colors.grey2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Основна інформація</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.option} onPress={handleFacebook}>
          <Icon
            name="facebook-square"
            size={30}
            color="#3b5998"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.optionText}>Facebook</Text>
          <MaterialCommunityIcons
            name="chevron-right-circle-outline"
            size={20}
            color={colors.grey2}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleInstagram}>
          <Icon
            name="instagram"
            size={30}
            color="#cd486b"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.optionText}>Instagram</Text>
          <MaterialCommunityIcons
            name="chevron-right-circle-outline"
            size={20}
            color={colors.grey2}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.main,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.cardbackground,
    paddingLeft: 10,
  },
  headerText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  headerTextView: { backgroundColor: colors.grey5, paddingVertical: 3 },
  section: {
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
    flex: 1,
    color: colors.grey2,
  },
  checkmark: {
    fontSize: 20,
    color: "green",
  },
});

export default SettingsScreen;
