import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.common.neutral};
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;
