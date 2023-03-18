import { Route, useNavigation, useRoute } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Alert } from "react-native";
import { BackButton } from "../../components/BackButton";
import { CharacterInsider } from "../../components/CharacterInsider";
import { GeneralDetails } from "../../components/GeneralDetails";
import { Loading } from "../../components/Loading";
import { LoadingScreen } from "../../components/LoadingScreen";
import { api } from "../../libs/axios";
import { DataType } from "../CurrentAuction/types";
import { Container, HeaderTitle, HeaderWrapper } from "./styles";

type Params = {
  item: DataType;
};

type MyRoute = Route<"CurrentAuction", Params>;

export function CharacterDetails() {
  const { goBack } = useNavigation();
  const { params } = useRoute<MyRoute>();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchCharacterDetailsList() {
    try {
      setLoading(true);
      const response = await api.get("/bazar/character-details", {
        params: { auctionId: 1179843 },
      });

      setData(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não possível carregar as informações");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacterDetailsList();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Container style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <FlashList
        keyExtractor={(item, index) => `${item.label} + ${index}`}
        estimatedItemSize={40}
        data={data}
        ListHeaderComponentStyle={{
          marginTop: StatusBar.currentHeight,
        }}
        ListHeaderComponent={
          <View style={{ paddingHorizontal: 24 }}>
            <HeaderWrapper>
              <BackButton onPress={goBack} />
              <HeaderTitle>Details Account</HeaderTitle>
            </HeaderWrapper>
            <CharacterInsider {...params.item} />
          </View>
        }
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        renderItem={({ item, index }) => (
          <View key={index} style={{ paddingHorizontal: 24 }}>
            <GeneralDetails {...item} />
          </View>
        )}
      />
    </Container>
  );
}
// <View style={{ paddingTop: StatusBar.currentHeight }}>
//   <StatusBar barStyle="dark-content" />
//   <HeaderWrapper>
//     <BackButton onPress={goBack} />
//     <HeaderTitle>Details Account</HeaderTitle>
//   </HeaderWrapper>
//   <Text>{params.item.name}</Text>
//   {data.map((item, index) => (
//     <View key={index}>
//       <GeneralDetails {...item} />
//     </View>
//   ))}
