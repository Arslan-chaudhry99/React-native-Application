import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 5,
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth:1,
    borderColor:"#dadce0"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width:"80%"
  },
  notificationiconSize: {
    width: 35,
    height: 35,
  },
  notificationImage:{
           width:15,
           height:15
  }
});
export default styles;
