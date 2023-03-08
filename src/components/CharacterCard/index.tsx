import React from "react";
import { Image, View } from "react-native";
import {
  Container,
  Label,
  Title,
  CharacterWrapper,
  CharacterContent,
  CharacterDetails,
  BazarDetailsWrapper,
} from "./styles";
import { CharacterCardProps } from "./types";

const searchIcon = require("../../assets/search.png");

export function CharacterCard({
  level,
  name,
  vocation,
  bid,
  world,
  auctionStart,
  auctionEnd,
  outfitUrl,
}: CharacterCardProps) {
  return (
    <Container>
      <CharacterWrapper>
        <CharacterContent>
          <Image
            source={{ uri: outfitUrl }}
            style={{ height: 100, width: 100 }}
          />
          <Label>Current Bid: {bid}</Label>
        </CharacterContent>

        <CharacterDetails>
          <Title>{name}</Title>
          <Label>Vocation: {vocation}</Label>
          <Label>Level: {level}</Label>
          <Label>World: {world}</Label>
        </CharacterDetails>
      </CharacterWrapper>
      <BazarDetailsWrapper>
        <View>
          <Label>Auction Start: {auctionStart}</Label>
          <Label style={{ marginTop: 8 }}>Auction End: {auctionEnd}</Label>
        </View>
        <Image source={searchIcon} />
      </BazarDetailsWrapper>
    </Container>
  );
}
