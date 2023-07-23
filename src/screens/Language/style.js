import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  textUi: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
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
    paddingLeft: 10
  },
  textUiIcons: {
    width: 30,
    height: 30,
    marginRight: 7,
  },
  textUiParagraph: {
    fontSize: 17,
    fontWeight: "900",
  },
  openNextIcon: {
    width: 20,
    height: 20,
  },
  tickImage: {
    width: 30,
    height: 30,
marginRight:14
  }
});
export default styles;