import React from "react";
import { TouchableOpacityProps } from "react-native";
import { LinearGradientTitle } from "../LinearGradientTitle";
import { Container, Linear } from "./styles";

interface IEnterButtonProps extends TouchableOpacityProps {}

export function EnterButton({ ...props }: IEnterButtonProps) {
  return (
    <Container activeOpacity={0.8} {...props}>
      <Linear
        colors={["#001DD5", "#0081F2", "#0D2CDD"]}
        start={{ x: 1, y: 0.9 }}
        end={{ x: 1, y: 0.1 }}
      >
        <LinearGradientTitle title="To Start" />
      </Linear>
    </Container>
  );
}
