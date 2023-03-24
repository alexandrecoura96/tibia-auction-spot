import React from "react";
import { Container, Title } from "./styles";
import { FilterButtonProps } from "./types";

export function FilterButton({ title, onPress }: FilterButtonProps) {
  return (
    <Container onPress={onPress} activeOpacity={0.8}>
      <Title>{title}</Title>
    </Container>
  );
}
