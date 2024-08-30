import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create(
  {
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
    signInInputError: {
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
      borderColor: '#c30010', // ONLY DIFFERENCE
    },
    signInErrorMessage: {
      height: 16,
      fontSize: 14,
      fontWeight: 200,
      color: '#c30010',
      marginTop: 8
    }, 
    signInForgotPasswordLink: {
      fontSize: 14,
      fontWeight: 600,
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
    signInNoAccount: {
      // textAlign: 'center',
      fontSize: 14,
      color: '#6B7280', // text-gray-500
      fontWeight: '600',
      lineHeight: 24
    },
    signInNoAccountLink: {
      fontWeight: '600',
      color: '#4F46E5', // text-indigo-600
      fontSize: 14
    },
    leaderboardListItem: {
      paddingVertical: 16,  // equivalent to `py-4`
      paddingHorizontal: 16,  // equivalent to `px-4`
      borderBottomWidth: 1,  // equivalent to `divide-y`
      borderBottomColor: '#E5E7EB',  // equivalent to `divide-gray-200`
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'space-between'
      // alignContent: 'center',
      // justifyContent: 'center'
    },
    leaderboardTop3Number: {
      color: 'white',
    },
    avatarContainer: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto'
    },
    avatarImage: {
      height: 24, // h-6 in Tailwind is 24px
      width: 24, // w-6 in Tailwind is 24px
      borderRadius: 4, // rounded-md in Tailwind
    },
    avatarBadgeContainer: {
      position: 'absolute',
      bottom: -4, // Slightly outside the bottom of the image
      right: -4, // Slightly outside the right of the image
      transform: [{ translateX: 12 }, { translateY: 12 }], // translate-x-1/2 and translate-y-1/2 in Tailwind
      borderRadius: 3, // Large enough for full roundness
      borderWidth: 5, // border-2 in Tailwind
      borderColor: 'white',
      backgroundColor: 'transparent', // Ensure background is transparent
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarBadgeReg: {
      height: 16, // h-1.5 in Tailwind is 6px
      width: 16, // w-1.5 in Tailwind is 6px
      borderRadius: 3, // rounded-full in Tailwind
      backgroundColor: '#d1d5db', // bg-gray-300 in Tailwind
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      // bottom: -4, // Slightly outside the bottom of the image
      // right: -4, // Slightly outside the right of the image
      transform: [{ translateX: 18 }, { translateY: 18 }],
    },
    avatarBadgeGold: {
      height: 20, // h-1.5 in Tailwind is 6px
      width: 20, // w-1.5 in Tailwind is 6px
      borderRadius: 3, // rounded-full in Tailwind
      backgroundColor: '#FFD700', // bg-gray-300 in Tailwind
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      // bottom: -4, // Slightly outside the bottom of the image
      // right: -4, // Slightly outside the right of the image
      transform: [{ translateX: 18 }, { translateY: 18 }],
    },
    avatarBadgeSilver: {
      height: 20, // h-1.5 in Tailwind is 6px
      width: 20, // w-1.5 in Tailwind is 6px
      borderRadius: 3, // rounded-full in Tailwind
      backgroundColor: '#C0C0C0', // bg-gray-300 in Tailwind
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      // bottom: -4, // Slightly outside the bottom of the image
      // right: -4, // Slightly outside the right of the image
      transform: [{ translateX: 18 }, { translateY: 18 }],
    },
    avatarBadgeBronze: {
      height: 20, // h-1.5 in Tailwind is 6px
      width: 20, // w-1.5 in Tailwind is 6px
      borderRadius: 3, // rounded-full in Tailwind
      backgroundColor: '#CD7F32', // bg-gray-300 in Tailwind
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      // bottom: -4, // Slightly outside the bottom of the image
      // right: -4, // Slightly outside the right of the image
      transform: [{ translateX: 18 }, { translateY: 18 }],
    },
  }
)