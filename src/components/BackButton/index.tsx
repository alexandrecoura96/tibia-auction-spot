import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { Container } from "./styles";
import { IBackButtonProps } from "./types";

export function BackButton({ ...props }: IBackButtonProps) {
  return (
    <Container {...props}>
      <Feather name="arrow-left" size={32} color="#5A2800" />
    </Container>
  );
}
