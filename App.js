import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { AuthProvider } from "./src/contexts/AuthContext";
import { colors } from "./src/global/styles";
import RootNavigator from "./src/navigation/RootNavigator";
import store from "./src/reducers/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function App() {
  const statusBarHeight = getStatusBarHeight();

  return (
    <AuthProvider>
      <Provider store={store}>
        <SafeAreaView
          style={[
            styles.container,
            { paddingTop: Platform.OS === "ios" ? statusBarHeight : 0 },
          ]}
        >
          <StatusBar barStyle="default" />
          <RootNavigator />
        </SafeAreaView>
      </Provider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
