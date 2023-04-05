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

const backgroundImage = require("../../assets/fankit_offline_female.jpg");
const overlayBottomImage = require("../../assets/overlay_bottom3.png");
const tibiaDragonLogo = require("../../assets/tibia_dragon_logo.png");
const panelSimple = require("../../assets/panel_simple.png");
const grovebeast = require("../../assets/grovebeast.gif");
const skullfrost = require("../../assets/skullfrost.gif");
const thundergiant = require("../../assets/thundergiant.gif");

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
