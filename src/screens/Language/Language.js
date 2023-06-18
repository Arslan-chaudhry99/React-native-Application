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
} from "react-native";

import styles from "./style";
import profile from "../../IMG/profile.png";
import openNext from "../../IMG/open-next.png";
import notification from "../../IMG/notification.png";
import language from "../../IMG/language.png";
const Language = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.textUi}>
          <View style={styles.TwoItemContain}>
            <Text style={styles.textUiParagraph}>English</Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>
        <View style={styles.textUi}>
          <View style={styles.TwoItemContain}>
            <Text style={styles.textUiParagraph}>اردو</Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>
        <View style={styles.textUi}>
          <View style={styles.TwoItemContain}>
            <Text style={styles.textUiParagraph}>हिंदी</Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Language;
