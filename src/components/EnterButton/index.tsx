import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacityProps, Text } from "react-native";

import { Container } from "./styles";

interface IEnterButtonProps extends TouchableOpacityProps {}

export function EnterButton({ ...props }: IEnterButtonProps) {
  return (
    <Container activeOpacity={0.8} {...props}>
      <LinearGradient
        colors={["#001DD5", "#0081F2", "#0D2CDD"]}
        start={{ x: 1, y: 0.9 }}
        end={{ x: 1, y: 0.1 }}
        style={{
          borderRadius: 4,
          borderWidth: 4,
          borderTopColor: "#FEFC2E",
          borderLeftColor: "#E2A713",
          borderBottomColor: "#C98608",
          borderRightColor: "#E2A713",
          height: 52,
          width: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#F9D553", fontSize: 24, fontWeight: "bold" }}>
          To Start
        </Text>
      </LinearGradient>
    </Container>
  );
}
