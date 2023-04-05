import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppStackRoutes } from "./src/routes/app.stack.routes";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar, Platform } from "react-native";
import {
  Martel_300Light,
  Martel_400Regular,
  Martel_600SemiBold,
  Martel_700Bold,
  Martel_800ExtraBold,
  Martel_900Black,
  useFonts,
} from "@expo-google-fonts/martel";
import {
  Livvic_400Regular,
  Livvic_500Medium,
  Livvic_600SemiBold,
  Livvic_700Bold,
  Livvic_900Black,
} from "@expo-google-fonts/livvic";
import { Loading } from "./src/components/Loading";
import theme from "./src/styles/theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Martel_300Light,
    Martel_400Regular,
    Martel_600SemiBold,
    Martel_700Bold,
    Martel_800ExtraBold,
    Martel_900Black,
    Livvic_400Regular,
    Livvic_500Medium,
    Livvic_600SemiBold,
    Livvic_700Bold,
    Livvic_900Black,
  });

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Carregue seus recursos aqui
      } catch (e) {
        console.warn(e);
      } finally {
        // Defina um tempo de espera aqui antes de ocultar a SplashScreen
        setTimeout(async () => {
          await SplashScreen.hideAsync();
        }, 2000);
      }
    }
    prepareApp();
  }, []);

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar
            barStyle={Platform.OS === "ios" ? "light-content" : "default"}
            translucent
            backgroundColor={Platform.OS === "ios" ? "#FFF0D9" : "transparent"}
          />

          <AppStackRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
