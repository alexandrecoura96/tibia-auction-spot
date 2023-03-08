import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.martel_400};
  color: ${({ theme }) => theme.colors.text_primary.primary};
`;

export const Description = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  color: ${({ theme }) => theme.colors.text_primary.primary};
`;

export const OverLayButtomImage = styled.Image`
  width: 100%;
  height: 105px;
`;
