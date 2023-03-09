import { RFValue } from "react-native-responsive-fontsize";
import { Shadow } from "react-native-shadow-2";
import styled, { css } from "styled-components/native";

interface StatusLabelProps {
  status?: string;
}

export const BoxShadow = styled(Shadow).attrs({
  distance: 10,
  offset: [0, 2],
})`
  width: 100%;
  border-radius: ${RFValue(16)}px;
`;

export const Container = styled.View`
  border: 1px solid #5a2800;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  padding: ${RFValue(16)}px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_complementary.primary};
`;

export const CharacterWrapper = styled.View`
  padding: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid #5a2800;
  flex-direction: row;
  justify-content: space-between;
`;

export const CharacterOutfit = styled.Image`
  height: ${RFValue(80)}px;
  width: ${RFValue(80)}px;
  bottom: ${RFValue(20)}px;
  right: ${RFValue(30)}px;
  align-self: center;
`;

export const CharacterContent = styled.View``;

export const CharacterDetails = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const BazarDetailsWrapper = styled.View`
  padding-top: ${RFValue(16)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.livvic_400};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.common.black};
`;

export const LabelWrapper = styled.View`
  flex-direction: row;
`;

export const LabelContent = styled.Text`
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.common.black};
  margin-left: ${RFValue(4)}px;
`;

export const WorldName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_complementary.primary};
  margin-left: ${RFValue(4)}px;
`;

export const Bid = styled.Text`
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_primary.secondary};
  margin-left: ${RFValue(4)}px;
`;

export const AuctionEnd = styled.Text`
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.alert};
  margin-left: ${RFValue(4)}px;
`;

export const StatusLabel = styled.Text<StatusLabelProps>`
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  margin-left: ${RFValue(4)}px;
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
