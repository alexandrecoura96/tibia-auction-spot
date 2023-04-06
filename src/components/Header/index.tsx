import React from "react";
import { FilterButton } from "../FilterButton";
import {
  Background,
  Container,
  FilterWrapper,
  HeaderTitle,
  ResultDescription,
} from "./styles";
import { HeaderProps } from "./types";

const header_background = require("../../assets/webp/header_background.webp");

export function Header({
  title,
  resultDescription,
  onWorldPress,
  onVocationPress,
  onSortPress,
}: HeaderProps) {
  return (
    <Container>
      <Background source={header_background}>
        <HeaderTitle>{title}</HeaderTitle>
      </Background>
      <FilterWrapper>
        <FilterButton title="World" onPress={onWorldPress} />
        <FilterButton title="Vocation" onPress={onVocationPress} />
        <FilterButton title="Sort" onPress={onSortPress} />
      </FilterWrapper>
      <ResultDescription>{resultDescription}</ResultDescription>
    </Container>
  );
}
