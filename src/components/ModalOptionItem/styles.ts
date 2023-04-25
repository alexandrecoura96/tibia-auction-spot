import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  padding: ${RFValue(16)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.primary};
  flex: 1;
`;

export const OptionName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
