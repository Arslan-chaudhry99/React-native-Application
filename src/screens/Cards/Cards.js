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
  TouchableOpacity,
  Modal
} from "react-native";
import { useState } from "react";
import styles from "./Style";
import deleteIcon from "../../IMG/delete.png";
import Icon from 'react-native-vector-icons/FontAwesome';

const Cards = () => {
  const [cards, setCards] = useState([
    { id: 1, accountNumber: "1234 **** **** 3456" },
    { id: 2, accountNumber: "9876 **** **** 7654" },
    { id: 3, accountNumber: "5555 **** **** 8888" },
  ]);

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {cards.map((card) => (
            <View key={card.id} style={styles.cardContainer}>
              <Text style={styles.accountNumber}>{card.accountNumber}</Text>
              <TouchableOpacity>
                <Image source={deleteIcon} style={styles.deleteButtonText} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Add New Card</Text>

          <View style={styles.inputContainer}>
            <Icon
              name="credit-card"
              size={24}
              color="#666"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="user" size={24} color="#666" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Cardholder Name" />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputContainer, styles.halfInput]}>
              <Icon
                name="calendar"
                size={24}
                color="#666"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Expiry Date"
                keyboardType="numeric"
              />
            </View>

            <View style={[styles.inputContainer, styles.halfInput]}>
              <Icon name="lock" size={24} color="#666" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="CVV"
                keyboardType="numeric"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
export default Cards;
