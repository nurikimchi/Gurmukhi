import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create(
  {
    header: {
      fontSize: 18,
      margin: 0,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 400,
      color: "gray",
      backgroundColor: "white",
      padding: 50,
      paddingBottom: 40,
      textAlign: "center",
      fontFamily: "system-ui",
    },

    textBox: {
      fontFamily: "system-ui",
      color: "whitesmoke",
      backgroundColor: "#866a86",
      fontSize: 16,
      // fontWeight: 350,
      padding: 15,
      paddingBottom: 35,
      borderRadius: 10,
      textAlign: "center",
      margin: 15,
    },

    text: {
      fontSize: 14,
      fontFamily: "system-ui",
      margain: 20, 
      padding: 20,
      color: "gray",
      fontWeight: "bold",
    },
  }
)