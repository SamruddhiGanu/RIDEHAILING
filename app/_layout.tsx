import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import 'react-native-reanimated';

import { ClerkProvider, ClerkLoaded } from 'clerk-expo';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file.'
  );
}



// --- Keep splash visible until we hide it manually
(async () => {
  try {
    await SplashScreen.preventAutoHideAsync();
  } catch (e) {
    console.warn(e);
  }
})();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      (async () => {
        try {
          await SplashScreen.hideAsync();
        } catch (e) {
          console.warn(e);
        }
      })();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // --- Show simulated splash (same as production)
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("../assets/images/splash.png")}
          resizeMode="contain"
          style={styles.splashImage}
        />
      </View>
    );
  }

  return (
   <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
  
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(root)" options={{ headerShown: false }} />

      <Stack.Screen name="+not-found" />
    </Stack>
    </ClerkLoaded>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#ffffff", // match your splash background
    alignItems: "center",
    justifyContent: "center",
  },
  splashImage: {
    width: 200, // adjust if needed
    height: 200,
  },
});
