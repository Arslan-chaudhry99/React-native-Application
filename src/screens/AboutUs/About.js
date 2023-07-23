import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableRipple,
} from "react-native";
import img from "../../IMG/Chaaudhry.jpeg";

import styles from "./Style";
const About = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.logoContainer}>
            <Image source={img} style={styles.logo} />
          </View>
          <Text style={styles.title}>Welcome to Our Company</Text>
          <Text style={styles.subtitle}>
            Building the Future of Software Engineering
          </Text>
          <Text style={styles.description}>
            We are a team of passionate software engineers dedicated to creating
            innovative and high-quality software solutions. With expertise in
            various technologies, we strive to build cutting-edge applications
            that exceed our clients' expectations.
          </Text>
          <Text style={styles.description}>
            Our mission is to leverage our skills and knowledge to deliver
            impactful software solutions that drive business growth and success.
            We value collaboration, creativity, and continuous learning, which
            enable us to tackle complex challenges and deliver exceptional
            results.
          </Text>
          <Text style={styles.description}>
            Whether you need a mobile app, web application, or custom software
            development, our team is ready to turn your ideas into reality. Get
            in touch with us today to discuss how we can help you achieve your
            goals.
          </Text>
          <Text style={styles.signature}>- The Team at Our Company</Text>

        </View>
      </ScrollView>
    </>
  );
};

export default About;
