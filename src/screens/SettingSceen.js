import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const LANGUAGES = ["English", "Spanish", "French", "German"];

export default function SettingScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Text style={styles.label}>Username:</Text>
      <Text style={styles.text}>johndoe</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>johndoe@example.com</Text>

      <Text style={styles.label}>Phone Number:</Text>
      <Text style={styles.text}>555-555-5555</Text>

      <Text style={styles.label}>Language:</Text>
      <View style={styles.languageContainer}>
        {LANGUAGES.map((language) => (
          <TouchableOpacity
            key={language}
            style={
              language === selectedLanguage
                ? styles.languageButtonSelected
                : styles.languageButton
            }
            onPress={() => handleLanguageSelect(language)}
          >
            <Text
              style={
                language === selectedLanguage
                  ? styles.languageButtonTextSelected
                  : styles.languageButtonText
              }
            >
              {language}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.aboutButton}>
        <Text style={styles.aboutButtonText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact Us by Email</Text>
      </TouchableOpacity>

      <View style={styles.notificationContainer}>
        <Text style={styles.label}>Notifications:</Text>
        <TouchableOpacity style={styles.notificationToggle}>
          <Text style={styles.notificationToggleText}>On</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Instagram</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  languageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  languageButton: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#2196F3",
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  languageButtonSelected: {
    backgroundColor: "#2196F3",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#2196F3",
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  languageButtonText: {
    fontSize: 16,
    color: "#2196F3",
  },
  languageButtonTextSelected: {
    fontSize: 16,
    color: "#fff",
  },
  aboutButton: {
    backgroundColor: "#2196F3",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  aboutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  contactButton: {
    backgroundColor: "#eee",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  contactButtonText: {
    color: "#757575",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  notificationToggle: {
    backgroundColor: "#2196F3",
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  notificationToggleText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  socialContainer: {
    flexDirection: "row",
  },
  socialButton: {
    backgroundColor: "#eee",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  socialButtonText: {
    color: "#757575",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
