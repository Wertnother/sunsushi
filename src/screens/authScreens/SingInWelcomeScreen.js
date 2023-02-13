import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { colors, parameters } from "../../global/styles";
import Swiper from "react-native-swiper";
import Button from "../../components/Button";

export default function SingInWelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.sloganView}>
        <Text style={styles.sloganText}>Самі смачні суші</Text>
        <Text style={styles.sloganText}>тільки в нашій доставці</Text>
      </View>

      <View style={styles.slides}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: "https://e-admin.com.ua/photo/photo/uploads/sunsushi%20/1671746236120.jpg",
              }}
              style={styles.imageStyles}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: "https://e-admin.com.ua/photo/photo/uploads/sunsushi%20/1671716556977.jpg",
              }}
              style={styles.imageStyles}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: "https://e-admin.com.ua/photo/photo/uploads/sunsushi/1658512501894.jpg",
              }}
              style={styles.imageStyles}
            />
          </View>
        </Swiper>
      </View>

      <View
        style={{
          flex: 4,
          justifyContent: "flex-end",
          marginBottom: 20,
          marginHorizontal: 20,
        }}
      >
        <View>
          <Button
            title={"SING IN"}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Pressable style={parameters.secondButtonStyle}>
            <Text style={parameters.secondButtonTitleStyle}>
              Create an account
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sloganView: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  sloganText: {
    fontSize: 26,
    color: colors.main,
    fontWeight: "bold",
  },
  slides: {
    flex: 4,
    justifyContent: "center",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBd9",
  },
  imageStyles: { height: "100%", width: "100%" },
});
