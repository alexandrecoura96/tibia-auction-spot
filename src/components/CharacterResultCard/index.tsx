import dayjs from "dayjs";
import React from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Container,
  Label,
  Title,
  CharacterWrapper,
  CharacterContent,
  CharacterDetails,
  BazarDetailsWrapper,
  WorldName,
  LabelWrapper,
  LabelContent,
  Bid,
  AuctionEnd,
  BoxShadow,
} from "./styles";
import { CharacterResultCardProps } from "./types";

const searchIcon = require("../../assets/search.png");
const tibiaCoin = require("../../assets/tibia_coin.png");

export function CharacterResultCard({
  level,
  name,
  vocation,
  bid,
  world,
  auctionStart,
  auctionEnd,
  outfitUrl,
  inProgress,
  onPress,
}: CharacterResultCardProps) {
  const date = new Date(Number(auctionEnd) * 1000);
  const bidLabel =
    inProgress === "Current Bid:" ? "Current Bid:" : "Minimum Bid:";
  return (
    <Container>
      <BoxShadow>
        <CharacterWrapper>
          <CharacterContent>
            <Image
              source={{ uri: outfitUrl }}
              style={{
                height: 80,
                width: 80,
                bottom: 20,
                right: 30,
                alignSelf: "center",
              }}
            />

            <LabelWrapper>
              <Label>{bidLabel}</Label>
              <Bid>{bid}</Bid>
              <Image
                source={tibiaCoin}
                style={{ alignSelf: "center", marginLeft: 8 }}
              />
            </LabelWrapper>
          </CharacterContent>

          <CharacterDetails>
            <Title>{name}</Title>
            <LabelWrapper style={{ marginTop: 8 }}>
              <Label>Vocation:</Label>
              <LabelContent>{vocation}</LabelContent>
            </LabelWrapper>
            <LabelWrapper style={{ marginTop: 8 }}>
              <Label>Level:</Label>
              <LabelContent>{level}</LabelContent>
            </LabelWrapper>
            <LabelWrapper style={{ marginTop: 8 }}>
              <Label>World:</Label>
              <WorldName>{world}</WorldName>
            </LabelWrapper>
          </CharacterDetails>
        </CharacterWrapper>
      </BoxShadow>
      <BazarDetailsWrapper>
        <View>
          <LabelWrapper>
            <Label>Auction Start:</Label>
            <LabelContent>{auctionStart}</LabelContent>
          </LabelWrapper>
          <LabelWrapper style={{ marginTop: 8 }}>
            <Label>Auction End:</Label>
            <AuctionEnd>{`${dayjs(date).format(
              "MMM DD YYYY, HH:mm"
            )} CET`}</AuctionEnd>
          </LabelWrapper>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Image source={searchIcon} />
        </TouchableOpacity>
      </BazarDetailsWrapper>
    </Container>
  );
}
