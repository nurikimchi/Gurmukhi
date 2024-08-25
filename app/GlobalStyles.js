import { Button, StyleSheet } from "react-native";

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

    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 10
    },

    navbarAppTitle: {
      fontSize: 30,
    },

    progressBarWrapper: {
      padding: 20,
      width: '100%',
    },

    cardScrollView: {
      paddingHorizontal: 20,
      flex: 1,
      marginVertical: 25
    },

    cardGridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    card: {
      width: '45%',
      height: 200,
      margin: 8,
      padding: 20,
      borderRadius: 8,
      backgroundColor: '#add8e6',
    },

    button: {
      backgroundColor: '#4682b4',
      borderColor: 'white',
      borderWidth: 2,
      padding: 1,
      borderRadius: 19,
      width: 100,
      height: 27,
    },

    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'small',
      textAlign: "center",
    },

    lsnText: {
     color: 'black', 
     fontSize: 15,
    },

    barContainer: {
      width: '100%',
      maxWidth: 300, 
      borderRadius: 15,
      overflow: 'hidden',
      marginTop: 5, 
      marginHorizontal: 'auto' 
  },

    progressWrapper: {
      alignItems: 'center',
      paddingHorizontal: 20,
      justifyContent: 'center',
  },

    progressBar: {
      backgroundColor: '#4682b4',
      height: 20, 
      borderRadius: 15,
  },

    progressText: {
    fontSize: 14, 
    fontWeight: 'bold',
    marginBottom: 5, 
    textAlign: 'center', 
  },
}
)