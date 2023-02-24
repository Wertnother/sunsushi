import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { colors, parameters, title } from "../../global/styles";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Button from "../../components/Button";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignInScreen({ navigation }) {
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("DrawerNavigator");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Header
        title="МІЙ АККАУНТ"
        type={"arrow-back-outline"}
        navigation={navigation}
      />

      <View style={styles.signInTitleContainer}>
        <Text style={title}>Вхід в систему</Text>
      </View>

      <View style={styles.signInDescriptionContainer}>
        <Text style={styles.text1}>
          Будь ласка, введіть електронну пошту та пароль зареєстровані у вашому
          обліковому записі
        </Text>
      </View>

      <View style={styles.signInFormContainer}>
        <View style={styles.textInputLogin}>
          <View>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color={colors.grey3}
            />
          </View>
          <TextInput
            style={{ width: "90%" }}
            placeholder="Email"
            ref={textInput1}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.TextInputPassword}>
          <View>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color={colors.grey3}
            />
          </View>
          <TextInput
            style={{ width: "80%" }}
            placeholder="Password"
            ref={textInput2}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={{ marginRight: 10 }}>
            <MaterialIcons
              name="visibility-off"
              size={24}
              color={colors.grey3}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title={"УВІЙТИ"} onPress={handleSignIn} />
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Забули пароль?</Text>
      </View>

      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>

      <View style={styles.socialButtonsContainer}>
        <FontAwesome.Button
          name="facebook"
          style={styles.SocialIcon}
          backgroundColor="#3b5998"
        >
          Увійти за допомогою Facebook
        </FontAwesome.Button>
      </View>
      <View style={styles.socialButtonsContainer}>
        <FontAwesome.Button
          name="google"
          style={styles.SocialIcon}
          backgroundColor="red"
        >
          Увійти за допомогою Google
        </FontAwesome.Button>
      </View>

      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>Вперше в SunSushi?</Text>
        <Pressable
          style={styles.createAccountButton}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <Text style={styles.createAccountButtonText}>
            Створити обліковий запис
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  signInTitleContainer: { marginLeft: 20, marginTop: 10 },

  text1: {
    textAlign: "center",
    color: colors.grey3,
    fontSize: 16,
  },

  signInDescriptionContainer: { alignItems: "center", marginTop: 10 },

  signInFormContainer: { marginTop: 20 },

  textInputLogin: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingLeft: 15,
    paddingVertical: 10,
  },

  TextInputPassword: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingLeft: 15,
    marginTop: 20,
    paddingVertical: 10,
  },

  SocialIcon: {
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  buttonContainer: { marginHorizontal: 20, marginTop: 20 },

  forgotPasswordContainer: { alignItems: "center", marginTop: 15 },

  forgotPasswordText: {
    color: colors.grey3,
    fontSize: 16,
    textDecorationLine: "underline",
  },

  orContainer: { alignItems: "center", marginVertical: 30 },

  orText: { fontSize: 20, fontWeight: "bold" },

  socialButtonsContainer: { marginHorizontal: 20, marginTop: 10 },

  createAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },

  createAccountText: {
    flex: 3,
    fontSize: 16,
    color: colors.grey3,
  },

  createAccountButton: {
    justifyContent: "flex-end",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.main,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  createAccountButtonText: {
    color: colors.main,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
