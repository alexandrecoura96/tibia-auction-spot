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

const searchIcon = require("../../assets/webp/search.webp");

const tibiaCoin = require("../../assets/webp/tibia_coin.webp");

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
      inProgress.valueOf() === "Minimum Bid:"
        ? "Min. Bid:"
        : inProgress.valueOf();

    const formattedStatus =
      status === "currentlyprocessed" ? "currently processed" : status;

    return (
      <Container>
        <BoxShadow>
          <CharacterWrapper>
            <UpsideContainer>
              <CharacterDetails>
                <Title>{name}</Title>
                <LabelWrapper style={{ marginTop: RFValue(8) }}>
                  <Label>World:</Label>
                  <WorldName>{Boolean(world) ? world : "--"}</WorldName>
                </LabelWrapper>
                <LabelWrapper style={{ marginTop: RFValue(8) }}>
                  <Label>Vocation:</Label>
                  <LabelContent>
                    {Boolean(vocation) ? vocation : "--"}
                  </LabelContent>
                </LabelWrapper>
              </CharacterDetails>
              <CharacterContent>
                {Boolean(outfitUrl) && (
                  <CharacterOutfit source={{ uri: outfitUrl }} />
                )}
              </CharacterContent>
            </UpsideContainer>
            <DownsideContainer>
              <LabelWrapper>
                <Label>Level:</Label>
                <LabelContent>{Boolean(level) ? level : "--"}</LabelContent>
              </LabelWrapper>
              <LabelWrapper>
                <Label>{Boolean(bidLabel) ? bidLabel : "--"}</Label>
                <Bid style={{ maxWidth: RFValue(70) }} numberOfLines={1}>
                  {Boolean(bid) ? bid : "--"}
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
              <LabelContent>
                {Boolean(auctionStart) ? auctionStart : "--"}
              </LabelContent>
            </LabelWrapper>
            <LabelWrapper style={{ marginTop: RFValue(8) }}>
              <Label>Auction End:</Label>
              <AuctionEnd isFinished={isFinished}>
                {isFinished ? auctionEnd : this.state.timeLeft}
              </AuctionEnd>
            </LabelWrapper>
            {isFinished && (
              <LabelWrapper style={{ marginTop: RFValue(8) }}>
                {Boolean(status) && (
                  <StatusLabel status={formattedStatus}>
                    {formattedStatus}
                  </StatusLabel>
                )}
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
