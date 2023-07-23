import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import styles from "./Styles";
import notification from "../../IMG/notification.png";
import dotImg from "../../IMG/dot.png";
const Notification = () => {
  let arr = [1, 2, 3, 4, 6, 7, 1, 2, 3, 4, 6, 7, 1, 2, 3, 4, 6];
  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.mainContainer} scrollEnabled={true}>
          {arr.map(() => {
            return (
              <>
                <View style={styles.container}>
                  <Image
                    source={notification}
                    style={styles.notificationiconSize}
                  />
                  <View style={styles.textContainer}>
                    <Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit...
                    </Text>
                    <Text>1 min ago</Text>
                  </View>
                  <Image source={dotImg} style={styles.notificationImage} />
                </View>
              </>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Notification;
