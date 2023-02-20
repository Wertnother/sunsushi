import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { colors, title } from "./src/global/styles";
import RootNavigator from "./src/navigation/RootNavigator";
import store from "./src/reducers/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusbar}
        />
        <RootNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
