import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.common.neutral};
`;

export const CharacterResultCardItemWrapper = styled.View`
  padding-top: ${RFValue(16)}px;
  padding-left: ${RFValue(24)}px;
  padding-right: ${RFValue(24)}px;
`;
