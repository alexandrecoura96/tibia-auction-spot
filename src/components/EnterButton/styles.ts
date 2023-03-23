import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ButtonName = styled.Text`
  color: ${({ theme }) => theme.colors.amber.secondary};
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.martel_900};
`;
export const Container = styled.TouchableOpacity`
  border-radius: ${RFValue(4)}px;
  border-width: ${RFValue(4)}px;
  border-top-color: ${({ theme }) => theme.colors.amber.tertiary};
  border-left-color: ${({ theme }) => theme.colors.amber.primary};
  border-bottom-color: ${({ theme }) => theme.colors.amber.quaternary};
  border-right-color: ${({ theme }) => theme.colors.amber.primary};
`;

export const Linear = styled(LinearGradient)`
  border: ${RFValue(2)}px solid #000;
  border-radius: ${RFValue(4)}px;
  height: ${RFValue(52)}px;
  width: ${RFValue(240)}px;
  align-items: center;
  justify-content: center;
`;
