import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px solid #5a2800;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  padding: 16px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  font-size: ${RFValue(14)}px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text_complementary.primary};
`;

export const CharacterWrapper = styled.View`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid #5a2800;
  flex-direction: row;
  justify-content: space-between;
`;

export const CharacterContent = styled.View``;

export const CharacterDetails = styled.View``;

export const BazarDetailsWrapper = styled.View`
  padding-top: 16px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.livvic_400};
  font-size: ${RFValue(14)}px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.common.black};
`;
