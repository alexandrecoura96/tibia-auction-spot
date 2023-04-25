import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View``;
export const Background = styled.ImageBackground.attrs({
  resizeMode: "contain",
})`
  height: ${RFValue(48)}px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.martel_400};
  color: ${({ theme }) => theme.colors.common.white};
`;

export const FilterWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;
  justify-content: space-between;
  margin-top: ${RFValue(8)}px;
`;

export const ResultDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.martel_900};
  padding-top: ${RFValue(16)}px;
  padding-right: ${RFValue(31)}px;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
