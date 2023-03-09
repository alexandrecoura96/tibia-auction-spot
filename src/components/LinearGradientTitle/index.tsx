import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import React from "react";
import { View } from "react-native";
import { Title } from "./styles";
import { LinearGradientTitleProps } from "./types";
import { RFValue } from "react-native-responsive-fontsize";

export function LinearGradientTitle({ title }: LinearGradientTitleProps) {
  return (
    <MaskedView
      style={{
        height: RFValue(40),
        flexDirection: "row",
      }}
      maskElement={
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Title>{title}</Title>
        </View>
      }
    >
      <LinearGradient
        colors={["#E2A713", "#F9D553"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0.1 }}
        style={{
          flex: 1,
        }}
      />
    </MaskedView>
  );
}
