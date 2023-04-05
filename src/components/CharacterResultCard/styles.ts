import { RFValue } from "react-native-responsive-fontsize";
import { Shadow } from "react-native-shadow-2";
import styled, { css } from "styled-components/native";

interface StatusLabelProps {
  status?: string;
}

interface AuctionEndProps {
  isFinished?: boolean;
}

export const BoxShadow = styled(Shadow).attrs({
  distance: 10,
  offset: [0, 2],
})`
  width: 100%;
  border-radius: ${RFValue(16)}px;
`;

export const UpsideContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const DownsideContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.View`
  border: 1px solid #5a2800;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  padding: ${RFValue(16)}px;
  margin-top: ${RFValue(16)}px;
  margin-left: ${RFValue(24)}px;
  margin-right: ${RFValue(24)}px;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_complementary.primary};
`;

export const CharacterWrapper = styled.View`
  padding: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid #5a2800;
  justify-content: space-between;
`;

export const TibiaCoin = styled.Image`
  height: ${RFValue(12)}px;
  width: ${RFValue(12)}px;
  margin-left: ${RFValue(4)}px;
  align-self: center;
`;

export const CharacterOutfit = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: ${RFValue(80)}px;
  width: ${RFValue(80)}px;
  bottom: ${RFValue(16)}px;
  right: ${RFValue(16)}px;
`;

export const CharacterContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CharacterDetails = styled.View`
  flex: 1;
`;

export const BazarDetailsWrapper = styled.View`
  padding-top: ${RFValue(16)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
`;

export const Label = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_400};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.common.black};
`;

export const LabelWrapper = styled.View`
  flex-direction: row;
`;

export const LabelContent = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.common.black};
  margin-left: ${RFValue(4)}px;
`;

export const WorldName = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_complementary.primary};
  margin-left: ${RFValue(4)}px;
`;

export const Bid = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_primary.secondary};
  margin-left: ${RFValue(4)}px;
`;

export const AuctionEnd = styled.Text.attrs({
  numberOfLines: 1,
})<AuctionEndProps>`
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.alert};
  margin-left: ${RFValue(4)}px;

  ${(props) =>
    props.isFinished &&
    css`
      color: ${({ theme }) => theme.colors.common.black};
    `};
`;

export const StatusLabel = styled.Text.attrs({
  numberOfLines: 1,
})<StatusLabelProps>`
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  ${(props) =>
    props.status === "finished" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `};

  ${(props) =>
    props.status === "cancelled" &&
    css`
      color: ${({ theme }) => theme.colors.tertiary};
    `};
`;
