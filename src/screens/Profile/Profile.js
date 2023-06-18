import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Button,
} from "react-native";
import img from "../../IMG/Chaaudhry.jpeg";
import edit from "../../IMG/edit.png";
import styles from "./Styles";
const Profile = () => {
  let content = [
    {
      title: "Name:",
      name: "Arslan Chaudhry",
    },
    {
      title: "Email:",
      name: "arslanchaudhry@gmail.com",
    },
    {
      title: "Phone:",
      name: "+92 3415403790",
    },
    {
      title: "Sellery:",
      name: "20,000$",
    },
    {
      title: "Job Tile:",
      name: "Softwear Engineer",
    },
    {
      title: "Skills:",
      name: "  Javascript,Typescript,NodeJS,ExpressJS, Mongoose, MongoDB",
    },
  ];
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.profileImgContainer}>
              <Image source={img} style={styles.ProfileImg} />
            </View>
            <Text style={styles.Profilename}>Arslan Cahdury</Text>
            <Text style={styles.ProfileTile}>Title: Software Engineer </Text>
            <Image source={edit} style={styles.editIconWidth} />
          </View>
          <View style={styles.profileTableInfo}>
            {content.map((value, index) => {
              return (
                <>
                  <View style={styles.tableField} key={index}>
                    <Text style={styles.FontBolder}>{value.title}</Text>
                    <Text style={styles.mainTextHolder}> {value.name}</Text>
                  </View>
                </>
              );
            })}
            <View style={styles.buttonContainer}>
              <Button title="Update Profile" />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
