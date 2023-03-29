import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../global/styles";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";
import { AuthContext } from "../contexts/AuthContext";

const SignUpScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Header
        title="Редагувати профіль"
        type="arrow-back-outline"
        navigation={navigation}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.formContainer}>
          <SignInForm />
        </View>

        <View style={styles.signOutContainer}>
          <Pressable
            style={styles.signOutButton}
            onPress={() => {
              logout();
            }}
          >
            <Text style={styles.signOutText}>Вийти з аккаунту</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  formContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    justifyContent: "flex-start",
  },
  signOutContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    marginTop: 5,
    marginRight: 20,
  },
  signOutButton: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.main,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  signOutText: {
    color: colors.main,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: -3,
  },
});
