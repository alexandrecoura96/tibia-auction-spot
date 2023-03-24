import React from "react";
import { FilterButton } from "../FilterButton";
import {
  Background,
  Container,
  FilterName,
  FilterWrapper,
  HeaderTitle,
  ResultDescription,
} from "./styles";
import { HeaderProps } from "./types";

const header_background = require("../../assets/header_background.png");

export function Header({
  title,
  resultDescription,
  onFilterPress,
}: HeaderProps) {
  return (
    <Container>
      <Background source={header_background}>
        <HeaderTitle>{title}</HeaderTitle>
      </Background>
      <FilterWrapper>
        <FilterName>Filters</FilterName>
        <FilterButton title="World" onPress={onFilterPress} />
        <FilterButton title="Vocation" />
      </FilterWrapper>
      <ResultDescription>{resultDescription}</ResultDescription>
    </Container>
  );
}
