import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius:100,

  },
  logoContainer:{
           display:"flex",
           justifyContent:"center",
           alignItems:"center"
  }
  ,
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#888888",
    marginBottom: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  signature: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 40,
    textAlign: "center",
  },
});
export default styles;
