import React, { useCallback, useEffect, useState } from "react";
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
  StatusLabel,
} from "./styles";
import { CharacterResultCardProps } from "./types";
import { getTimeLeft } from "../../utils/countdown";
import dayjs from "dayjs";

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
  status,
  isFinished,
}: CharacterResultCardProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(Number(auctionEnd)));
  const formattedAuctionEnd = new Date(Number(auctionEnd) * 1000);
  const formattedDate = `${dayjs(formattedAuctionEnd).format(
    "MMM DD YYYY, HH:mm"
  )} CET`;

  const bidLabel =
    inProgress.valueOf() === "Current Bid:" || "Winning Bid:"
      ? inProgress.valueOf()
      : "Minimum Bid:";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(Number(auctionEnd)));
    }, 1000);

    return () => clearInterval(interval);
  }, [auctionEnd]);

  const renderContent = useCallback(() => {
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
              <AuctionEnd>{isFinished ? formattedDate : timeLeft}</AuctionEnd>
            </LabelWrapper>
            {isFinished && (
              <LabelWrapper style={{ marginTop: 8 }}>
                <StatusLabel status={status}>{status}</StatusLabel>
              </LabelWrapper>
            )}
          </View>
          <TouchableOpacity onPress={onPress}>
            <Image source={searchIcon} />
          </TouchableOpacity>
        </BazarDetailsWrapper>
      </Container>
    );
  }, [
    auctionStart,
    bid,
    bidLabel,
    formattedDate,
    isFinished,
    level,
    name,
    onPress,
    outfitUrl,
    status,
    timeLeft,
    vocation,
    world,
  ]);

  return renderContent();
}
