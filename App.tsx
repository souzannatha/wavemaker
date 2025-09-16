import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Dashboard } from './src/screens/Dashboard/Dashboard';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Jakarta-Sans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'Jakarta-Sans-Regular': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
  });

  useEffect(() => {
    async function hideSplash() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplash();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <StatusBar hidden />
      <Dashboard />
    </View>
  );
}
