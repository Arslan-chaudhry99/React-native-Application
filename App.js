import React from "react";
import { View, Image, StyleSheet, StatusBar, Text, Button } from "react-native";
import Profile from "./src/screens/Profile/Profile";
import Footer from "./src/components/Footer/Footer";
import Home from "./src/screens/Home/Home";
import Setting from "./src/screens/Settings/Setting";
import Account from "./src/screens/Account/Account";
import Notification from "./src/screens/Notification/Notification";
import Language from "./src/screens/Language/Language";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Account Setting" component={Account} />
          <Stack.Screen name="Select Language" component={Language} />
        </Stack.Navigator>
        <Footer/>
      </NavigationContainer>
     
    </>
  );
};

export default App;
