import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Title, OverLayButtomImage } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { EnterButton } from "../../components/EnterButton";

const backgroundImage = require("../../assets/fankit_offline_female.jpg");
const overlayBottomImage = require("../../assets/overlay_bottom3.png");
const tibiaDragonLogo = require("../../assets/tibia_dragon_logo.png");
const panelSimple = require("../../assets/panel_simple.png");
const sprite1 = require("../../assets/sprite1.png");

export function Initial() {
  const navigate = useNavigation();
  return (
    <Container
      source={backgroundImage}
      resizeMode="cover"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.2)", "#051122"]}
        start={{ x: 1, y: 0.1 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={tibiaDragonLogo}
            style={{ height: 301 }}
            resizeMode="center"
          />
          <View style={{ paddingLeft: 32, paddingRight: 32, width: "100%" }}>
            <ImageBackground
              source={panelSimple}
              style={{
                height: 56,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Title
                style={{ color: "#CBA88E", fontSize: 30, fontWeight: "400" }}
              >
                Welcome Tibians
              </Title>
            </ImageBackground>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",

              width: "100%",
            }}
          >
            <Image source={sprite1} style={{ width: 55.37, height: 61.36 }} />
            <Image source={sprite1} style={{ width: 55.37, height: 61.36 }} />
            <Image source={sprite1} style={{ width: 55.37, height: 61.36 }} />
          </View>
          <Title style={{ color: "#CBA88E", fontSize: 20, fontWeight: "500" }}>
            Follow the Bazaar and save time
          </Title>
          <EnterButton onPress={() => navigate.navigate("Home")} />
          <OverLayButtomImage source={overlayBottomImage} resizeMode="cover" />
        </View>
      </LinearGradient>
    </Container>
  );
}
