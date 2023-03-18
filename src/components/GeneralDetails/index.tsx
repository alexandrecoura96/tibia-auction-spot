import React from "react";
import { Container, Content, Label } from "./styles";
import { GeneralDetailProps } from "./types";

export function GeneralDetails({ label, content }: GeneralDetailProps) {
  return (
    <Container>
      <Label>{label}:</Label>
      <Content>{content}</Content>
    </Container>
  );
}
