import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    // paddingTop: 100,
    // display: "flex",
    // alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "#555555",
    color: "white",
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomStartRadius: 90,
    borderBottomEndRadius: 90,
  },
  profileImgContainer: {
    position: "relative",
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  ProfileImg: {
    width: "100%",
    height: "100%",
  },
  Profilename: {
    marginTop: 10,
    fontWeight: 900,
    fontSize: 20,
    color: "white",
  },
  ProfileTile: {
    fontSize: 10,
    opacity: 0.8,
    color: "white",
  },
  profileTableInfo: {
    marginTop: 40,
    width: "98%",
    padding: 7,
  },
  FontBolder: {
    fontSize: 18,
    opacity: 0.4,
    marginBottom: 5,
  },
  tableField: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#dadce0",

    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
  },
  mainTextHolder: {
    fontWeight: "600",
    color: "black",
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 100,
  },
  editIconWidth: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
});
export default styles;
