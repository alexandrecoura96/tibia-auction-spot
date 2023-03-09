import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert, View, StatusBar, ListRenderItemInfo } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CharacterResultCard } from "../../components/CharacterResultCard";
import { CharacterResultCardProps } from "../../components/CharacterResultCard/types";
import { Header } from "../../components/Header";
import { LoadingScreen } from "../../components/LoadingScreen";
import { api } from "../../libs/axios";
import { DataType } from "../CurrentAuction/types";

export function HistoryAuction() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataType[]>([]);
  const navigate = useNavigation();

  async function fetchCurrentBazarList() {
    try {
      setLoading(true);
      const response = await api.get("/history", {
        params: { pageNumber: 1 },
      });

      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não possível carregar as informações");
    } finally {
      setLoading(false);
    }
  }

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<CharacterResultCardProps>) => (
      <View style={{ paddingHorizontal: 24, paddingTop: 16 }}>
        <CharacterResultCard
          isFinished
          {...item}
          onPress={() => navigate.navigate("CharacterDetails", { item })}
        />
      </View>
    ),
    [navigate]
  );

  useEffect(() => {
    fetchCurrentBazarList();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.name} + ${index}`}
        ListHeaderComponentStyle={{
          marginTop: StatusBar.currentHeight,
        }}
        ListHeaderComponent={
          <Header
            title="History Auctions"
            resultDescription="» Results: 3,196"
          />
        }
        contentContainerStyle={{
          backgroundColor: "#FFF0D9",
          paddingBottom: 80,
        }}
        renderItem={renderItem}
      />
    </>
  );
}
