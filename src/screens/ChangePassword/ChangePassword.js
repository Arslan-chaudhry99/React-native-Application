import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from "./Style";
const ChangePassword = () => {
  let data = [1, 3];
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.heading}>Current Password</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Current Password"
      />
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="New Password"
      />
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Confirm New password"
      />
     
     
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};
export default ChangePassword;