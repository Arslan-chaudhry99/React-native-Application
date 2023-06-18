import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  FlatList,
} from "react-native";
import styles from "./Styles";
const Home = () => {
  let data = [1, 3];
  return (
    <>
     <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to the Home Page</Text>
        <Text style={styles.subtitle}>This is a basic home page in React Native</Text>
      </View>
    </>
  );
};
export default Home;
