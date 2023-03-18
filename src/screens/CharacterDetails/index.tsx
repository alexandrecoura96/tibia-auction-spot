import { Route, useNavigation, useRoute } from "@react-navigation/native";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StatusBar, Alert } from "react-native";
import { BackButton } from "../../components/BackButton";
import { CharacterInsider } from "../../components/CharacterInsider";
import { GeneralDetails } from "../../components/GeneralDetails";
import { GeneralDetailProps } from "../../components/GeneralDetails/types";
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
  const [data, setData] = useState<GeneralDetailProps[]>([]);

  async function fetchCharacterDetailsList(auctionId: number) {
    try {
      setLoading(true);
      const response = await api.get("/bazar/character-details", {
        params: { auctionId },
      });

      setData(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não possível carregar as informações");
    } finally {
      setLoading(false);
    }
  }

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<GeneralDetailProps>) => {
      return (
        <View style={{ flex: 1 }}>
          <GeneralDetails {...item} />
        </View>
      );
    },
    []
  );

  useEffect(() => {
    fetchCharacterDetailsList(params.item.auctionId);
  }, [params.item.auctionId]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Container style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <FlashList
        keyExtractor={(item, index) => `${item.label} + ${index}`}
        estimatedItemSize={76}
        data={data}
        ListHeaderComponentStyle={{
          marginTop: StatusBar.currentHeight,
          paddingBottom: 16,
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
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        renderItem={renderItem}
      />
    </Container>
  );
}
