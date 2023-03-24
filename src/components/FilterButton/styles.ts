import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border: 1px solid #5f4d41;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  margin-left: ${RFValue(24)}px;
  margin-top: ${RFValue(8)}px;
  align-items: center;
  justify-content: center;
  background-color: #d4c0a1;
`;
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.livvic_600};
  color: ${({ theme }) => theme.colors.text_primary.secondary};
`;
