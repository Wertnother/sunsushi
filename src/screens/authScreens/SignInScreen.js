import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Header from "../../components/Header";
import { colors, parameters, title } from "../../global/styles";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Button from "../../components/Button";

export default function SignInScreen({ navigation }) {
  const [textInputPasswordFocussed, setTextInputPasswordFocussed] =
    useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header
        title="MY ACCOUNT"
        type={"arrow-back-outline"}
        navigation={navigation}
      />

      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={title}>Sign-In</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>Plese enter the email and pasword</Text>
        <Text style={styles.text1}>registered with your acount</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View style={styles.TextInputLogin}>
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
            onFocus={() => {
              setTextInputPasswordFocussed(false);
            }}
            onBlur={() => {
              setTextInputPasswordFocussed(true);
            }}
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

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Button
          title={"SING IN"}
          onPress={() => {
            navigation.navigate("DrawerNavigator");
          }}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
          Forgot a pasword?
        </Text>
      </View>

      <View style={{ alignItems: "center", marginVertical: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <FontAwesome.Button
          name="facebook"
          style={styles.SocialIcon}
          backgroundColor="#3b5998"
        >
          Login with Facebook
        </FontAwesome.Button>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <FontAwesome.Button
          name="google"
          style={styles.SocialIcon}
          backgroundColor="red"
        >
          Login with Google
        </FontAwesome.Button>
      </View>

      <View style={{ marginLeft: 20, marginTop: 15 }}>
        <Text style={{ ...styles.text1 }}>New on SunSushi?</Text>
      </View>

      <View
        style={{ alignItems: "flex-end", marginHorizontal: 20, marginTop: 10 }}
      >
        <Pressable style={styles.createButton}>
          <Text style={styles.createButtonTitle}>Create an account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInputLogin: {
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
    borderRadius: 12,
    height: 50,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: "#ff8c52",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
