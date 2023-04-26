import { RFValue } from "react-native-responsive-fontsize";
import { Shadow } from "react-native-shadow-2";
import styled from "styled-components/native";

export const BoxShadow = styled(Shadow).attrs({
  distance: 10,
  offset: [0, 2],
})`
  width: 100%;
  border-radius: ${RFValue(16)}px;
`;

export const CharacterWrapper = styled.View`
  padding: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  justify-content: space-between;
`;

export const UpsideContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_complementary.primary};
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
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: ${RFValue(4)}px;
`;

export const Bid = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: ${RFValue(4)}px;
`;
