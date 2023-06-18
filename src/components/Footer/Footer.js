import styles from "./Styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import home from "../../IMG/home.png";
import notification from "../../IMG/notification.png";
import setting from "../../IMG/setting.png";
import profile from "../../IMG/profile.png";

const Footer = () => {
  const navigation = useNavigation();
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName); // Navigate to the specified screen
  };
  return (
    <>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() => navigateToScreen("Home")}
          style={styles.iconsContainer}
        >
          <View>
            <Image source={home} style={styles.icons} />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigateToScreen("Notification")}
          style={styles.iconsContainer}
        >
          <View>
            <Image source={notification} style={styles.icons} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToScreen("Setting")}
          style={styles.iconsContainer}
        >
          <View>
            <Image source={setting} style={styles.icons} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToScreen("Profile")}
          style={styles.iconsContainer}
        >
          <View>
            <Image source={profile} style={styles.icons} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Footer;
