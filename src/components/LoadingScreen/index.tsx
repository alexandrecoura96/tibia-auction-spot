import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function LoadingScreen() {
  const theme = useTheme();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <ActivityIndicator size={32} color={theme.colors.text.secondary} />
      </Container>
    </>
  );
}
