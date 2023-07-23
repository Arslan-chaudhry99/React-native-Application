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
  SafeAreaView
} from "react-native";

import styles from "./style";

import tickImage from "../../IMG/greenTick.png";
const Language = () => {
  let languageArry = ["English", "اردو", "हिंदी"]
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {
            languageArry.map((value, index) => {
              return <>
                <View style={styles.textUi}>
                  <View style={styles.TwoItemContain}>
                    <Text style={styles.textUiParagraph}>{value}</Text>
                  </View>
                  <View>
                    {
                      index === 0 ? <Image source={tickImage} style={styles.tickImage} />
                        : null
                    }
                  </View>
                </View>
              </>
            })
          }


        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Language;
