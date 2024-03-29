import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: ${RFValue(8)}px;
  margin: ${RFValue(8)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Label = styled.Text.attrs({
  numberOfLines: 4,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.common.black};
  color: ${({ theme }) => theme.colors.text_complementary.primary};
  text-align: center;
`;
export const Content = styled.Text.attrs({
  numberOfLines: 4,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.common.black};
  margin-top: ${RFValue(4)}px;
  text-align: center;
`;
