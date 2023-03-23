import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { DownsideContainer } from "../CharacterResultCard/styles";
import {
  Bid,
  BoxShadow,
  CharacterContent,
  CharacterDetails,
  CharacterOutfit,
  CharacterWrapper,
  Label,
  LabelContent,
  LabelWrapper,
  TibiaCoin,
  Title,
  UpsideContainer,
  WorldName,
} from "./styles";
import { CharacterInsiderProps } from "./types";

const tibiaCoin = require("../../assets/tibia_coin.png");

export function CharacterInsider({ ...props }: CharacterInsiderProps) {
  const bidLabel =
    props.inProgress.valueOf() === "Current Bid:" || "Winning Bid:"
      ? props.inProgress.valueOf()
      : "Minimum Bid:";
  return (
    <BoxShadow>
      <CharacterWrapper>
        <UpsideContainer>
          <CharacterDetails>
            <Title>{props.name}</Title>
            <LabelWrapper style={{ marginTop: RFValue(8) }}>
              <Label>Vocation:</Label>
              <LabelContent>{props.vocation}</LabelContent>
            </LabelWrapper>
            <LabelWrapper style={{ marginTop: RFValue(8) }}>
              <Label>Level:</Label>
              <LabelContent>{props.level}</LabelContent>
            </LabelWrapper>
          </CharacterDetails>
          <CharacterContent>
            <CharacterOutfit source={{ uri: props.outfitUrl }} />
          </CharacterContent>
        </UpsideContainer>
        <DownsideContainer>
          <LabelWrapper>
            <Label>World:</Label>
            <WorldName>{props.world}</WorldName>
          </LabelWrapper>
          <LabelWrapper>
            <Label>{bidLabel}</Label>
            <Bid style={{ maxWidth: RFValue(70) }} numberOfLines={1}>
              {props.bid}
            </Bid>
            <TibiaCoin source={tibiaCoin} />
          </LabelWrapper>
        </DownsideContainer>
      </CharacterWrapper>
    </BoxShadow>
  );
}