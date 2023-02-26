import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
import { colors } from "../global/styles";

const AddressView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <View style={styles.addressRow}>
          <Icon
            type="material-community"
            name="map-marker"
            color={colors.grey1}
            size={26}
          />
          <Text style={styles.addressText}>22 Street</Text>
        </View>

        <View style={styles.clockRow}>
          <Icon
            type="material-community"
            name="clock-time-four"
            color={colors.grey1}
            size={26}
          />
          <Text style={styles.clockText}>Now</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Icon
          type="material-community"
          name="tune"
          color={colors.grey1}
          size={26}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  addressContainer: {
    flexDirection: "row",
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressText: {
    marginLeft: 5,
  },
  clockRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginRight: 20,
  },
  clockText: {
    marginLeft: 5,
  },
  iconContainer: {
    marginLeft: 10,
  },
});

export default AddressView;
