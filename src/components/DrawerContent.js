import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Avatar } from "@rneui/base";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../global/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native";

export default function DrawerContent(props) {
  return (
    <View style={styles.conteiner}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.main,
            paddingLeft: 20,
            paddingVertical: 10,
          }}
        >
          <Avatar
            rounded
            avatarStyle={styles.avatar}
            size={75}
            source={{
              uri: "https://e-admin.com.ua/photo/photo/uploads/sunsushi%20/1671746236120.jpg",
            }}
          />

          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontweight: "bold",
                color: colors.cardbackground,
                fontSize: 18,
              }}
            >
              Adriy Kosten
            </Text>
            <Text style={{ color: colors.cardbackground, fontSize: 14 }}>
              andr@gmail.com
            </Text>
          </View>
        </View>

        <DrawerItemList {...props} />
        <DrawerItem
          label="Оплата"
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card-multiple-outline"
              size={size}
              color={color}
            />
          )}
        />

        <DrawerItem
          label="Мої замовлення"
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="order-bool-ascending"
              size={size}
              color={color}
            />
          )}
        />

        <DrawerItem
          label="Налаштування"
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={size}
              color={color}
            />
          )}
        />

        <DrawerItem
          label="Допомога"
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="lifebuoy" size={size} color={color} />
          )}
        />

        {/* <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
          <Text style={styles.preferences}>Уподобання</Text>

          <View style={styles.switchText}>
            <Text style={styles.darkThemeText}>Чорна тема</Text>
            <View style={{ paddingRight: 10 }}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor="#f5dd4b"
              />
            </View>
          </View>
        </View> */}
      </DrawerContentScrollView>

      <DrawerItem
        label="Вийти"
        icon={({ color, size }) => (
          <MaterialCommunityIcons
            name="logout-variant"
            size={size}
            color={color}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: colors.cardbackground,
  },
  preferences: {
    fontSize: 16,
    color: colors.grey2,
    padingTop: 10,
    paddingLeft: 20,
  },
  switchText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingLeft: 20,
    paddingVertical: 5,
    padingRight: 10,
  },
  darkThemeText: {
    fontSize: 16,
    color: colors.grey2,
    padingTop: 10,
    paddingLeft: 20,
    fontWeight: "bold",
  },
});
