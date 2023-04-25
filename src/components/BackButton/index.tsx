import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { Container } from "./styles";
import { IBackButtonProps } from "./types";
import { useTheme } from "styled-components/native";

export function BackButton({ ...props }: IBackButtonProps) {
  const theme = useTheme();
  return (
    <Container {...props}>
      <Feather
        name="arrow-left"
        size={32}
        color={theme.colors.text.secondary}
      />
    </Container>
  );
}
