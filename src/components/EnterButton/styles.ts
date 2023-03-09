import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ButtonName = styled.Text`
  color: #f9d553;
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.martel_900};
`;
export const Container = styled.TouchableOpacity``;
