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
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: '45%',
      height: 200,
      margin: 8,
      padding: 20,
      borderRadius: 8,
      backgroundColor: '#add8e6',
      flexGrow: 'true'
    },
    signInContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 24,
      paddingVertical: 48,
      marginBottom: 64
    },
    signInInnerContainer: {
      alignSelf: 'center',
      width: '100%',
      maxWidth: 400,
    },
    signInLogo: {
      alignSelf: 'center',
      height: 40,
      width: 'auto',
    },
    signInHeading: {
      marginTop: 40,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 36,
      color: '#1F2937', // text-gray-900
    },
    signInForm: {
      marginTop: 40,
    },
    signInFormField: {
      marginBottom: 24,
    },
    signInLabel: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 24,
      color: '#1F2937', // text-gray-900
    },
    signInInput: {
      marginTop: 8,
      width: '100%',
      paddingVertical: 6,
      paddingLeft: 8,
      borderRadius: 8,
      backgroundColor: '#FFFFFF', // white background
      color: '#1F2937', // text-gray-900
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
      borderWidth: 1,
      borderColor: '#D1D5DB', // ring-gray-300
    },
    signInForgotPasswordLink: {
      fontSize: 14,
      fontWeight: '600',
      color: '#4F46E5', // text-indigo-600
    },
    signInSubmitButton: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: '#4F46E5', // bg-indigo-600
      paddingVertical: 6,
      paddingHorizontal: 12,
      fontSize: 14,
      fontWeight: '600',
      color: '#FFFFFF', // text-white
    },
    signInLink: {
      marginTop: 40,
      textAlign: 'center',
      fontSize: 14,
      color: '#6B7280', // text-gray-500
    },
    signInLinkText: {
      fontWeight: '600',
      color: '#4F46E5', // text-indigo-600
    },
  }
)