import { Route, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import { DataType } from "../CurrentAuction/types";

type Params = {
  item: DataType;
};

type MyRoute = Route<"CurrentAuction", Params>;

export function CharacterDetails() {
  const { params } = useRoute<MyRoute>();
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <Text>{params.item.name}</Text>
    </View>
  );
}
