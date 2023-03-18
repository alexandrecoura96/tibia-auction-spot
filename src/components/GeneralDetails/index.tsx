import React, { useCallback } from "react";
import { Container, Content, Label } from "./styles";
import { GeneralDetailProps } from "./types";

export function GeneralDetails({ label, content }: GeneralDetailProps) {
  const renderContent = useCallback(() => {
    return (
      <Container>
        <Label>{label.replace(":", "")}:</Label>
        <Content>{content}</Content>
      </Container>
    );
  }, [content, label]);

  return renderContent();
}
