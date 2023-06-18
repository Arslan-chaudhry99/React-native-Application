import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
           footerContainer: {
                      // width: "100%",
                      height: 60,
                      backgroundColor: "#F5F5F5",
                    
                      borderColor: "#f8f9f5",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 1,
                      shadowColor: 'black',
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 1,
                      shadowRadius: 4,
                      elevation: 4,
                      flexDirection: 'row'
           },
           iconsContainer: {
                      width: "25%",
                      height: "100%",
                  
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
           },
           icons: {
                     width:30,
                     height:30
           }

});
export default styles;