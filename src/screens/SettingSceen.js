import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import Header from "../components/Header";
import { colors } from "../global/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

const SettingsScreen = ({ navigation }) => {
  const [language, setLanguage] = useState("uk");
  const email = "support@example.com";

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
      {/* <Header
        title={"Налаштування"}
        navigation={navigation}
        type={"arrow-back-outline"}
      /> */}

      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://via.placeholder.com/50" }}
        />
        <Text style={styles.name}>John Doe</Text>
      </View>

      <View style={styles.headerTextView}>
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
      </View>

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
    alignContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: colors.main,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 75,
    marginHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.cardbackground,
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
