import React from "react";
import { StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Container, Title } from "./styles";

export function Alert() {
  return (
    <Container style={{ paddingTop: StatusBar.currentHeight }}>
      <SafeAreaView />
      <StatusBar barStyle="dark-content" />
      <Title>In construction</Title>
    </Container>
  );
}
