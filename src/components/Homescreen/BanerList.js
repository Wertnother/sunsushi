import React, { useState, useRef } from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { banersData } from "../../global/Data";
import { colors } from "../../global/styles";
import { Video } from "expo-av";

export const BanerList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const renderModalContent = () => (
    <View style={styles.centeredView}>
      <Pressable
        style={styles.closeButton}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.closeButtonText}>X</Text>
      </Pressable>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: selectedVideo,
        }}
        resizeMode="contain"
        isLooping
        shouldPlay
      />
    </View>
  );

  return (
    <>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={banersData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Pressable
            style={styles.banerContainer}
            onPress={() => {
              setSelectedVideo(item.video);
              setModalVisible(true);
            }}
          >
            <Image
              source={require("../../assets/Screenshot.png")}
              style={styles.imageStyles}
            />
          </Pressable>
        )}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {renderModalContent()}
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    width: "100%",
    borderRadius: 25,
    backgroundColor: colors.main,
    padding: 5,
    width: 250,
    height: 50,
    marginLeft: 20,
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: 500,
  },
});
