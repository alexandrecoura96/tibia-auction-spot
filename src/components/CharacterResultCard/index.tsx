import React, { PureComponent } from "react";
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
  TibiaCoin,
  UpsideContainer,
  DownsideContainer,
} from "./styles";
import { CharacterResultCardProps } from "./types";
import { getTimeLeft } from "../../utils/countdown";
import dayjs from "dayjs";
import { RFValue } from "react-native-responsive-fontsize";

const searchIcon = require("../../assets/search.png");

const tibiaCoin = require("../../assets/tibia_coin.png");

export class CharacterResultCard extends PureComponent<CharacterResultCardProps> {
  state = {
    timeLeft: getTimeLeft(Number(this.props.auctionEnd)),
  };

  interval: any;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timeLeft: getTimeLeft(Number(this.props.auctionEnd)),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: CharacterResultCardProps) {
    if (prevProps.auctionEnd !== this.props.auctionEnd) {
      clearInterval(this.interval);
      this.setState({
        timeLeft: getTimeLeft(Number(this.props.auctionEnd)),
      });
      this.interval = setInterval(() => {
        this.setState({
          timeLeft: getTimeLeft(Number(this.props.auctionEnd)),
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
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
    } = this.props;

    const bidLabel =
      inProgress.valueOf() === "Current Bid:" || "Winning Bid:"
        ? inProgress.valueOf()
        : "Minimum Bid:";

    return (
      <Container>
        <BoxShadow>
          <CharacterWrapper>
            <UpsideContainer>
              <CharacterDetails>
                <Title>{name}</Title>
                <LabelWrapper style={{ marginTop: RFValue(8) }}>
                  <Label>Vocation:</Label>
                  <LabelContent>{vocation}</LabelContent>
                </LabelWrapper>
                <LabelWrapper style={{ marginTop: RFValue(8) }}>
                  <Label>Level:</Label>
                  <LabelContent>{level}</LabelContent>
                </LabelWrapper>
              </CharacterDetails>
              <CharacterContent>
                <CharacterOutfit source={{ uri: outfitUrl }} />
              </CharacterContent>
            </UpsideContainer>
            <DownsideContainer>
              <LabelWrapper>
                <Label>World:</Label>
                <WorldName>{world}</WorldName>
              </LabelWrapper>
              <LabelWrapper>
                <Label>{bidLabel}</Label>
                <Bid style={{ maxWidth: RFValue(70) }} numberOfLines={1}>
                  {bid}
                </Bid>
                <TibiaCoin source={tibiaCoin} />
              </LabelWrapper>
            </DownsideContainer>
          </CharacterWrapper>
        </BoxShadow>
        <BazarDetailsWrapper>
          <View>
            <LabelWrapper>
              <Label>Auction Start:</Label>
              <LabelContent>{auctionStart}</LabelContent>
            </LabelWrapper>
            <LabelWrapper style={{ marginTop: RFValue(8) }}>
              <Label>Auction End:</Label>
              <AuctionEnd isFinished={isFinished}>
                {isFinished ? auctionEnd : this.state.timeLeft}
              </AuctionEnd>
            </LabelWrapper>
            {isFinished && (
              <LabelWrapper style={{ marginTop: RFValue(8) }}>
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
  }
}
