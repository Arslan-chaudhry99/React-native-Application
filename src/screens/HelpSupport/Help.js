import React from "react";
import { useState } from "react";
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

import styles from "./style";

const Home = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpansion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: "What is React Native?",
      answer:
        "React Native is an open-source framework developed by Facebook...",
    },
    {
      question: "What is React Native?",
      answer:
        "React Native is an open-source framework developed by Facebook...",
    },
    {
      question: "What is React Native?",
      answer:
        "React Native is an open-source framework developed by Facebook...",
    },
    {
      question: "What is React Native?",
      answer:
        "React Native is an open-source framework developed by Facebook...",
    },
    {
      question: "What is React Native?",
      answer:
        "React Native is an open-source framework developed by Facebook...",
    },
    {
      question: "What is React Native?",
      answer:
        "React Native is an open-source framework developed by Facebook...",
    },

    // Add more FAQs here
  ];
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {faqs.map((faq, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleExpansion(index)}
            style={styles.faqContainer}
          >
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>{faq.question}</Text>
              <Text
                style={[
                  styles.arrow,
                  expanded === index && styles.arrowExpanded,
                ]}
              >
                ▼
              </Text>
            </View>
            {expanded === index && (
              <Text style={styles.answerText}>{faq.answer}</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};
export default Home;
