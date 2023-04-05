import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Linear = styled(LinearGradient).attrs({
  colors: ["rgba(0, 0, 0, 0.2)", "#051122"],
  start: { x: 1, y: 0.1 },
  end: { x: 1, y: 0.5 },
})`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: ${RFValue(301)}px;
`;

export const BackgroundWrapper = styled.View`
  padding-left: ${RFValue(32)}px;
  padding-right: ${RFValue(32)}px;
  width: 100%;
`;

export const Background = styled.ImageBackground`
  height: 56px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.martel_400};
  color: ${({ theme }) => theme.colors.text_primary.primary};
`;

export const CreaturesImageWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding-left: ${RFValue(32)}px;
  padding-right: ${RFValue(32)}px;
`;

export const CreaturesImage = styled.Image`
  width: ${RFValue(55.37)}px;
  height: ${RFValue(61.36)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.livvic_500};
  color: ${({ theme }) => theme.colors.text_primary.primary};
`;

export const OverLayButtomImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 105px;
`;
