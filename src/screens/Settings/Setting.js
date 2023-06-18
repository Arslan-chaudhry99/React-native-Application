import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  Switch,
  Picker,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./Styles";
import security from "../../IMG/security.png";
import openNext from "../../IMG/open-next.png";
import bankCard from "../../IMG/Bank-card.png";
import profile from "../../IMG/profile.png";
import help from "../../IMG/helpsuport.png";
import about from "../../IMG/about.png";
import logout from "../../IMG/logout.png";
const Setting = () => {
  const navigation = useNavigation();
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName); // Navigate to the specified screen
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.settingsContainer}>
            <Text style={styles.textValues}>Dark Mode</Text>
            <Switch />
          </View>
          <View style={styles.textUi}>
            <TouchableOpacity
              style={styles.TwoItemContain}
              onPress={() => navigateToScreen("Account Setting")}
            >
              <Image source={profile} style={styles.textUiIcons} />
              <Text style={styles.textUiParagraph}>Account</Text>
            </TouchableOpacity>
            <View>
              <Image source={openNext} style={styles.openNextIcon} />
            </View>
          </View>
          <View style={styles.textUi}>
            <View style={styles.TwoItemContain}>
              <Image source={security} style={styles.textUiIcons} />
              <Text style={styles.textUiParagraph}>Security & Password</Text>
            </View>
            <View>
              <Image source={openNext} style={styles.openNextIcon} />
            </View>
          </View>
          <View style={styles.textUi}>
            <View style={styles.TwoItemContain}>
              <Image source={bankCard} style={styles.textUiIcons} />
              <Text style={styles.textUiParagraph}>Manage Card</Text>
            </View>
            <View>
              <Image source={openNext} style={styles.openNextIcon} />
            </View>
          </View>
          <View style={styles.textUi}>
            <View style={styles.TwoItemContain}>
              <Image source={help} style={styles.textUiIcons} />
              <Text style={styles.textUiParagraph}>Help and Support</Text>
            </View>
            <View>
              <Image source={openNext} style={styles.openNextIcon} />
            </View>
          </View>
          <View style={styles.textUi}>
            <View style={styles.TwoItemContain}>
              <Image source={about} style={styles.textUiIcons} />
              <Text style={styles.textUiParagraph}>About</Text>
            </View>
            <View>
              <Image source={openNext} style={styles.openNextIcon} />
            </View>
          </View>
          <View style={styles.textUilogout}>
            <View style={styles.TwoItemContain}>
              <Text style={styles.textUiParagraphLogout}>Logout</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Setting;
