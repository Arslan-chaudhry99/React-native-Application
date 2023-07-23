import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  settingsContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 4,
    shadowColor: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  textValues: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop:10,
    paddingBottom:10,
    
  },
  textUi: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#dadce0",
  },
  TwoItemContain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textUiParagraph: {
    fontSize: 15,
    fontWeight: "900",
  },
  textUiParagraphLogout:{
           fontSize: 16,
           fontWeight: "900",
           color:"red"        
  },

  textUiIcons: {
    width: 30,
    height: 30,
    marginRight: 7,
  },
  openNextIcon: {
           width:20,
           height:20
  },
  textUilogout:{
           paddingTop:10,
           paddingLeft:9
  }
});
export default styles;
