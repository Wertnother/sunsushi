import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const initialUserToken = null;

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(initialUserToken);

  const login = async (userId) => {
    try {
      if (AsyncStorage) {
        await AsyncStorage.setItem("userToken", userId);
        setUserToken(userId);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      if (AsyncStorage) {
        await AsyncStorage.removeItem("userToken");
        setUserToken(initialUserToken);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserToken = async () => {
    try {
      if (AsyncStorage) {
        const storedToken = await AsyncStorage.getItem("userToken");
        if (storedToken) {
          setUserToken(storedToken);
        } else {
          setUserToken(initialUserToken);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserToken();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
