import React, { useEffect, useState } from "react";
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
  CharacterOutfit,
} from "./styles";
import { CharacterResultCardProps } from "./types";
import { getTimeLeft } from "../../utils/countdown";

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
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(Number(auctionEnd)));
  const bidLabel =
    inProgress === "Current Bid:" ? "Current Bid:" : "Minimum Bid:";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(Number(auctionEnd)));
    }, 1000);

    return () => clearInterval(interval);
  }, [auctionEnd]);

  return (
    <Container>
      <BoxShadow>
        <CharacterWrapper>
          <CharacterContent>
            <CharacterOutfit source={{ uri: outfitUrl }} />
            <LabelWrapper>
              <Label>{bidLabel}</Label>
              <Bid>{bid}</Bid>
              {/* <Image
                source={tibiaCoin}
                style={{
                  alignSelf: "center",
                  marginLeft: 8,
                  height: 12,
                  width: 12,
                }}
              /> */}
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
            <AuctionEnd>{timeLeft}</AuctionEnd>
          </LabelWrapper>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Image source={searchIcon} />
        </TouchableOpacity>
      </BazarDetailsWrapper>
    </Container>
  );
}
