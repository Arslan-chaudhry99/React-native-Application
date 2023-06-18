import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  FlatList,
  Switch,
  TouchableOpacity
} from "react-native";
import styles from "./Style";
import profile from "../../IMG/profile.png";
import openNext from "../../IMG/open-next.png";
import notification from "../../IMG/notification.png";
import language from "../../IMG/language.png";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
           const navigation = useNavigation();
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName); // Navigate to the specified screen
  };
  return (
    <>
      <ScrollView>
        <View style={styles.textUi}>
          <View style={styles.TwoItemContain}>
            <Image source={notification} style={styles.textUiIcons} />
            <Text style={styles.textUiParagraph}>Notification</Text>
          </View>
          <View>
          <Switch value={true} />
          </View>
        </View>

        <TouchableOpacity style={styles.textUi} onPress={() => navigateToScreen("Select Language")}>
          <View style={styles.TwoItemContain}>
            <Image source={language} style={styles.textUiIcons} />
            <Text style={styles.textUiParagraph}>Change Language</Text>
          </View>
          <View>
          <Image source={openNext} style={styles.openNextIcon} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
export default Account;
