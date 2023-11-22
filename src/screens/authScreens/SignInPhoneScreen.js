import React, { useRef, useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Header from "../../components/Header";
import { colors, title } from "../../global/styles";
import Button from "../../components/Button";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../../firebase-config";
import firebase from "firebase/compat/app";
import { TextInputMask } from "react-native-masked-text";
import { AuthContext } from "../../contexts/AuthContext";

export default function SignInPhoneScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("+380");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [showVerificationForm, setShowVerificationForm] = useState(false);
  const recaptchaVerifier = useRef(null);
  const { login } = useContext(AuthContext);
  const test = "oY9Evhg9ukQnACzKkJhldfNEVRr1";

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
    setPhoneNumber("");
    setShowVerificationForm(true);
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            login(user.uid);
          }
        });

        setCode("");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Header
        title="Вхід в систему"
        type={"arrow-back-outline"}
        navigation={navigation}
      />

      <View style={styles.signInFormContainer}>
        {showVerificationForm ? (
          <>
            <View style={styles.signInDescriptionContainer}>
              <Text style={styles.text1}>
                Будь ласка, введіть код отриманий в СМС повідомленні
              </Text>
            </View>
            <View>
              <TextInput
                placeholder="XXXXXX"
                onChangeText={setCode}
                keyboardType="number-pad"
                style={styles.textInputCode}
              />
              <View style={styles.buttonContainer}>
                <Button title={"Підтвердити код"} onPress={confirmCode} />
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.signInDescriptionContainer}>
              <Text style={styles.text1}>
                Будь ласка, введіть ваш номемер телефону щоб отримати код
                підтведженя
              </Text>
            </View>
            <View>
              <TextInputMask
                type={"custom"}
                options={{
                  mask: "+380 99 999-99-99",
                }}
                value={phoneNumber}
                keyboardType="phone-pad"
                onChangeText={(text) => setPhoneNumber(text)}
                style={styles.textInputPhone}
              />

              <View style={styles.buttonContainer}>
                <Button title={"Надіслати код"} onPress={sendVerification} />
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  signInTitleContainer: { marginHorizontal: 20, marginTop: 10 },

  text1: {
    textAlign: "center",
    color: colors.grey3,
    fontSize: 16,
  },

  signInDescriptionContainer: { alignItems: "center", marginBottom: 15 },

  signInFormContainer: { marginTop: 20 },

  textInputPhone: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    paddingLeft: 15,
    paddingVertical: 10,
    fontSize: 20,
  },

  textInputCode: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    paddingLeft: 15,
    paddingVertical: 10,
    fontSize: 20,
    alignContent: "center",
  },

  buttonContainer: { marginHorizontal: 20, marginVertical: 20 },
});
