import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.martel_900};
`;
