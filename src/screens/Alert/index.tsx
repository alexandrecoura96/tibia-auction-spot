import React from "react";
import { StatusBar } from "react-native";
import { Container, Title } from "./styles";

export function Alert() {
  return (
    <Container style={{ paddingTop: StatusBar.currentHeight }}>
      <StatusBar barStyle="dark-content" />
      <Title>In construction</Title>
    </Container>
  );
}
