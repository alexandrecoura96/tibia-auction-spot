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

const tibiaCoin = require("../../assets/webp/tibia_coin.webp");

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
            <Title>{Boolean(props.name) ? props.name : "--"}</Title>
            <LabelWrapper style={{ marginTop: RFValue(8) }}>
              <Label>Vocation:</Label>
              <LabelContent>
                {Boolean(props.vocation) ? props.vocation : "--"}
              </LabelContent>
            </LabelWrapper>
            <LabelWrapper style={{ marginTop: RFValue(8) }}>
              <Label>Level:</Label>
              <LabelContent>
                {Boolean(props.level) ? props.level : "--"}
              </LabelContent>
            </LabelWrapper>
          </CharacterDetails>
          <CharacterContent>
            {Boolean(props.outfitUrl) && (
              <CharacterOutfit source={{ uri: props.outfitUrl }} />
            )}
          </CharacterContent>
        </UpsideContainer>
        <DownsideContainer>
          <LabelWrapper>
            <Label>World:</Label>
            <WorldName>{Boolean(props.world) ? props.world : "--"}</WorldName>
          </LabelWrapper>
          <LabelWrapper>
            <Label>{Boolean(bidLabel) ? bidLabel : "--"}</Label>
            <Bid style={{ maxWidth: RFValue(70) }} numberOfLines={1}>
              {Boolean(props.bid) ? props.bid : "--"}
            </Bid>
            <TibiaCoin source={tibiaCoin} />
          </LabelWrapper>
        </DownsideContainer>
      </CharacterWrapper>
    </BoxShadow>
  );
}
