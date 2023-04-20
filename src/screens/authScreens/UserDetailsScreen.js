import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../components/Button";
import { colors } from "../../global/styles";
import { OutlinedTextField } from "rn-material-ui-textfield";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../../../firebase-config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserDetailsScreen(uid) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("Алексндрія");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function fetchUserName() {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }

        const userId = uid;

        const userRef = firebase.firestore().collection("users").doc(userId);
        const snapshot = await userRef.get();

        setName(snapshot.data().name);
        setCity(snapshot.data().city);
        setEmail(snapshot.data().email);
      } catch (error) {
        let errorMessage = "";
        switch (error.code) {
          case "storage/unknown":
            errorMessage =
              "Сталася невідома помилка. Будь ласка, спробуйте ще раз.";
            break;
          case "firestore/unavailable":
            errorMessage =
              "Сервер Firebase Firestore недоступний. Будь ласка, спробуйте пізніше.";
            break;
          case "firestore/cancelled":
            errorMessage =
              "Операція була скасована. Будь ласка, спробуйте ще раз.";
            break;
          default:
            errorMessage = "Сталася помилка. Будь ласка, спробуйте ще раз.";
            break;
        }
        alert(errorMessage);
        console.error("Error fetching username:", error);
      }
    }
    fetchUserName();
  }, []);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleCityChange = (text) => {
    setCity(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleCreateAccount = () => {
    const user = firebase.auth().currentUser;

    if (user) {
      const uid = user.uid;
      console.log(uid);

      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .set({
          name: name,
          city: city,
          email: email,
        })
        .then(() => {
          console.log("User profile updated!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } else {
      console.log("User is not signed in.");
    }
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <OutlinedTextField
          label="Ім'я"
          tintColor={colors.main}
          onChangeText={handleNameChange}
          value={name}
        />
      </View>

      <View style={styles.inputContainer}>
        <OutlinedTextField
          label="Місто"
          tintColor={colors.main}
          onChangeText={handleCityChange}
          value={city}
        />
      </View>

      <View style={styles.inputContainer}>
        <OutlinedTextField
          label="Email"
          tintColor={colors.main}
          onChangeText={handleEmailChange}
          value={email}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Зберегти профіль" onPress={handleCreateAccount} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
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
  input: {
    fontSize: 16,
    marginLeft: 10,
  },
  buttonWrapper: {
    marginVertical: 20,
  },
});
