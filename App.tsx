import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppStackRoutes } from "./src/routes/app.stack.routes";
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
            barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
            translucent
            backgroundColor="transparent"
          />
          <AppStackRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
