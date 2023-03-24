import React from "react";
import { Container, OptionName } from "./styles";
import { ModalOptionItemProps } from "./types";

export function ModalOptionItem({ optionName, onPress }: ModalOptionItemProps) {
  return (
    <Container onPress={onPress} activeOpacity={0.8}>
      <OptionName>{optionName ? optionName : "All"}</OptionName>
    </Container>
  );
}
