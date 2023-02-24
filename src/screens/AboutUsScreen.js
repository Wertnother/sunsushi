import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import call from "react-native-phone-call";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../global/styles";

const AboutUsScreen = ({ navigation }) => {
  const [markers, setMarkers] = useState([
    {
      title: "SunSushi",
      coordinate: { latitude: 48.67063, longitude: 33.120571 },
      address: "м. Александрія, вул. Калініна 30",
      phone: "+380 (96) 210 90 95",
      hours: "ПН-НД: 10:30 - 21:45",
    },
  ]);

  const handlePhoneCall = (phoneNumber) => {
    const args = {
      number: phoneNumber,
      prompt: true,
    };

    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <Header
        title={"Про нас"}
        navigation={navigation}
        type="arrow-back-outline"
      />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.67063,
          longitude: 33.120571,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.title}
            title={marker.title}
            coordinate={marker.coordinate}
          />
        ))}
      </MapView>

      {markers.map((marker) => (
        <View key={marker.title} style={styles.markerInfo}>
          <Text style={styles.title}>{marker.title}</Text>
          <Text>{marker.address}</Text>
          <Text
            onPress={() => handlePhoneCall(marker.phone)}
            style={styles.phone}
          >
            {marker.phone}
          </Text>
          <Text style={styles.hours}>{marker.hours}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerInfo: {
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: colors.main,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  phone: {
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 5,
  },
  hours: {
    color: colors.grey3,
  },
});

export default AboutUsScreen;
