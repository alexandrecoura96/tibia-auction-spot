import React from "react";
import {
  Background,
  Container,
  HeaderTitle,
  ResultDescription,
} from "./styles";
import { HeaderProps } from "./types";

const header_background = require("../../assets/header_background.png");

export function Header({ title, resultDescription }: HeaderProps) {
  return (
    <Container>
      <Background source={header_background}>
        <HeaderTitle>{title}</HeaderTitle>
      </Background>
      <ResultDescription>{resultDescription}</ResultDescription>
    </Container>
  );
}
