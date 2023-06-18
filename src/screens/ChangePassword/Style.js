import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
marginLeft:3,
    color: "#333",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
  },
  error: {
    color: "red",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007bff",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
