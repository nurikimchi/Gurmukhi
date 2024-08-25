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
import { useRouter, useSegments, Slot } from "expo-router";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    router.replace('/signin');
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Slot/>
        <Stack.Screen name="index" />
        <Stack.Screen name="feature"/>
        <Stack.Screen name="profile"/>
        <Stack.Screen name="settings"/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signin"/>
      </Stack>
    </GestureHandlerRootView>
  );
}
