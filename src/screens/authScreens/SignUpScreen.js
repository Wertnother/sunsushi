import React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../../global/styles";
import Header from "../../components/Header";
import SignInForm from "../../components/SignInForm";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title="Редагувати профіль"
        type="arrow-back-outline"
        navigation={navigation}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Реєстрація</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Вперше в SunSushi?</Text>
          <SignInForm />
        </View>
        {/* <View style={styles.orContainer}>
          <Text style={styles.orText}>АБО</Text>
        </View> */}
        <View style={styles.signInContainer}>
          <Text style={styles.subtitle}>
            У вас вже є обліковий запис в SunSushi?
          </Text>
          <Pressable
            style={styles.signInButton}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <Text style={styles.signInText}>УВІЙТИ</Text>
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
  titleContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    color: colors.main,
    fontWeight: "bold",
  },
  formContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    justifyContent: "flex-start",
  },
  subtitle: {
    fontSize: 15,
    color: colors.grey2,
    marginTop: 5,
    marginBottom: 10,
  },
  orContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
  },
  orText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  signInContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    alignItems: "flex-end",
    marginTop: 5,
    marginRight: 20,
  },
  signInButton: {
    justifyContent: "flex-end",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.main,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  signInText: {
    color: colors.main,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: -3,
  },
});
