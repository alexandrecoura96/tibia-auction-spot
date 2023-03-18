import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.common.neutral};
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${RFValue(16)}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(50)}px;
  color: ${({ theme }) => theme.colors.text_primary.secondary};
  font-family: ${({ theme }) => theme.fonts.martel_400};
  flex: 1;
  text-align: center;
`;
