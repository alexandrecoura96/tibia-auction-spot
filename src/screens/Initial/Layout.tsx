import React from "react";
import { StatusBar } from "react-native";
import {
  Container,
  Title,
  OverLayButtomImage,
  Description,
  CreaturesImage,
  CreaturesImageWrapper,
  Background,
  BackgroundWrapper,
  Logo,
  ContentWrapper,
  Linear,
} from "./styles";
import { EnterButton } from "../../components/EnterButton";
import { LayoutProps } from "./types";

const backgroundImage = require("../../assets/webp/fankit_offline_female.webp");
const overlayBottomImage = require("../../assets/webp/overlay_bottom3.webp");
const tibiaDragonLogo = require("../../assets/webp/tibia_dragon_logo.webp");
const panelSimple = require("../../assets/webp/panel_simple.webp");
const grovebeast = require("../../assets/gif/grovebeast.gif");
const skullfrost = require("../../assets/gif/skullfrost.gif");
const thundergiant = require("../../assets/gif/thundergiant.gif");

export const Layout = ({ handleNavigate }: LayoutProps): JSX.Element => {
  return (
    <Container
      source={backgroundImage}
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <Linear>
        <ContentWrapper>
          <Logo source={tibiaDragonLogo} />
          <BackgroundWrapper>
            <Background source={panelSimple}>
              <Title>Welcome Tibians</Title>
            </Background>
          </BackgroundWrapper>
          <CreaturesImageWrapper>
            <CreaturesImage source={grovebeast} />
            <CreaturesImage source={skullfrost} />
            <CreaturesImage source={thundergiant} />
          </CreaturesImageWrapper>
          <Description>Follow the Bazaar and save time</Description>
          <EnterButton onPress={handleNavigate} />
          <OverLayButtomImage source={overlayBottomImage} />
        </ContentWrapper>
      </Linear>
    </Container>
  );
};
