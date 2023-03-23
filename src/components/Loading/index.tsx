import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function Loading() {
  const theme = useTheme();
  return (
    <Container>
      <ActivityIndicator color={theme.colors.text_primary.secondary} />
    </Container>
  );
}
