import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import { colors } from "../global/styles";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Alert } from "react-native";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [famillyName, setFamillyName] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleFamillyNameChange = (text) => {
    setFamillyName(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(
      auth,

      email,
      password
    )
      .then((userCredential) => {
        console.log("AccountCreated");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Mobile number"
          style={styles.input}
          keyboardType="number-pad"
          autoFocus={true}
          onChangeText={handlePhoneNumberChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          autoFocus={false}
          onChangeText={handleNameChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Family name"
          style={styles.input}
          autoFocus={false}
          onChangeText={handleFamillyNameChange}
        />
      </View>
      <View style={styles.emailContainer}>
        <MaterialCommunityIcons
          name="email-outline"
          style={styles.icon}
          color={colors.grey3}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleEmailChange}
        />
      </View>
      <View style={styles.passwordContainer}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color={colors.grey3}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
        <MaterialIcons name="visibility-off" size={24} color={colors.grey3} />
      </View>

      <View style={styles.legalTextWrapper}>
        <Text style={styles.legalText}>
          By creating or logging in to an account, you agree to our
        </Text>
        <Text style={styles.legalLink}>Terms & Conditions</Text>
        <Text style={styles.legalText}> and </Text>
        <Text style={styles.legalLink}>Privacy Statement</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Create my account" onPress={handleCreateAccount} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 10,
    marginTop: 20,
    height: 50,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 10,
    marginTop: 20,
    height: 50,
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grey4,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    height: 50,
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  legalTextWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  legalText: {
    fontSize: 13,
  },
  legalLink: {
    textDecorationLine: "underline",
    color: "green",
    fontSize: 13,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonWrapper: {
    marginVertical: 20,
  },
});
