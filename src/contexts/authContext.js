import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = "8ba790f3-5acd-4a08-bc6a-97a36c124f29";

  const login = async () => {
    try {
      await AsyncStorage.setItem("userToken", userId);
      setUserToken(userId);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      setUserToken(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      if (userToken) {
        setUserToken(userToken);
      } else {
        setUserToken(null);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserToken();
  }, []);

  if (loading) {
    // render spinner
    return null;
  }

  return (
    <AuthContext.Provider value={{ login, logout, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
