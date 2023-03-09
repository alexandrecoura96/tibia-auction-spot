import React from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color="#5A2800" />
    </Container>
  );
}
