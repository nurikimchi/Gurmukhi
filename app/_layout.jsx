import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Gesture, GestureHandlerRootView } from "react-native-gesture-handler";

import 'react-native-svg'
import 'react-native-gesture-handler';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import GestureScreen from './GestureScreen';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

//   const ExampleWithHoc = gestureHandlerRootHOC(() => (
//     <View>
//       <DraggableBox />
//     </View>
//   );
// );

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="feature"/>
        {/* component={GestureScreen} */}
        <Stack.Screen name="profile"/>
        <Stack.Screen name="settings"/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    // </GestureHandlerRootView>
  );
}
