import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import Button from "../../components/Button";

export default function SingInWelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.slides}>
        <Image
          source={require("../../assets/LogoSushi.png")}
          style={styles.imageStyles}
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          marginBottom: 20,
          marginHorizontal: 20,
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Button
            title={"Увійти"}
            onPress={() => {
              navigation.navigate("SignInPhoneScreen");
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slides: {
    flex: 1,
    justifyContent: "center",
  },
  imageStyles: { resizeMode: "contain", width: "100%" },
});
