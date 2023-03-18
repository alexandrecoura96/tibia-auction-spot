import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text.attrs({
  numberOfLines: 4,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.common.black};
  text-align: center;
`;
export const Content = styled.Text.attrs({
  numberOfLines: 4,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_700};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_primary.secondary};
  margin-top: ${RFValue(4)}px;
  text-align: center;
`;
