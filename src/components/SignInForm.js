import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { colors } from "../global/styles";
import { OutlinedTextField } from "rn-material-ui-textfield";
import firebase from "firebase/compat/app";

export default function SignInForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("Алексндрія");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      const uid = user.uid;
      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            setName(userData.name);
            setCity(userData.city);
            setEmail(userData.email);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data: ", error);
        });
    }
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
