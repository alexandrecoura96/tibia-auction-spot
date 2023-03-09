import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { Container } from "./styles";

export function LoadingScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <ActivityIndicator size={32} color="#5A2800" />
      </Container>
    </>
  );
}
