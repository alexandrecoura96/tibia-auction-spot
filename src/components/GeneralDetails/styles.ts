import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px solid #5f4d41;
  flex-direction: row;
  padding: 8px 16px;
  margin-top: 16px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const Label = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_400};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.common.black};
  margin-right: ${RFValue(4)}px;
`;
export const Content = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.common.black};
`;
