import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  faqContainer: {
    marginBottom: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 2,
    padding: 16,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  arrow: {
    fontSize: 16,
    color: "#777777",
  },
  arrowExpanded: {
    transform: [{ rotate: "180deg" }],
  },
  answerText: {
    fontSize: 16,
    color: "#555555",
  },
});
export default styles;
