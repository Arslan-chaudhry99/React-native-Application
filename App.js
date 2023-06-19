import React from "react";
import { View, Image, StyleSheet, StatusBar, Text, Button } from "react-native";
import Profile from "./src/screens/Profile/Profile";
import Footer from "./src/components/Footer/Footer";
import Home from "./src/screens/Home/Home";
import Setting from "./src/screens/Settings/Setting";
import Account from "./src/screens/Account/Account";
import Notification from "./src/screens/Notification/Notification";
import Language from "./src/screens/Language/Language";
import ChangePassword from "./src/screens/ChangePassword/ChangePassword";
import Cards from "./src/screens/Cards/Cards";
import Help from "./src/screens/HelpSupport/Help"
import About from "./src/screens/AboutUs/About"
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
          <Stack.Screen name="Change Password" component={ChangePassword} />
          <Stack.Screen name="Manage Cards" component={Cards} />
          <Stack.Screen name="Help and Support" component={Help} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
        <Footer/>
      </NavigationContainer>
     
    </>
  );
};

export default App;
