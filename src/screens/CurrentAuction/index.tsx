import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert, View, StatusBar } from "react-native";
import { CharacterResultCard } from "../../components/CharacterResultCard";
import { CharacterResultCardProps } from "../../components/CharacterResultCard/types";
import { Header } from "../../components/Header";
import { LoadingScreen } from "../../components/LoadingScreen";
import { api } from "../../libs/axios";
import { DataType } from "./types";
import { Loading } from "../../components/Loading";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Modalize } from "react-native-modalize";
import { WorldNames } from "../../utils/worldNames";
import { ModalOptionItem } from "../../components/ModalOptionItem";
import { ScreenHeight } from "../../utils/device";

export function CurrentAuction() {
  const navigate = useNavigation();
  const modalizeRef = useRef<Modalize>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [worldName, setWorldName] = useState<string>("");
  const [lastWorldName, setLastWorldName] = useState<string>();
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  async function fetchCurrentBazarList(pageNumber: number, worldName?: string) {
    try {
      setLoading(true);
      const response = await api.get("/bazar", {
        params: { pageNumber, worldName },
      });
      const newData = response.data;
      if (newData.length === 0) {
        setAllDataLoaded(true);
      } else {
        if (worldName !== lastWorldName) {
          setData(newData);
          setLastWorldName(worldName);
        } else {
          setData((prevData) => [...prevData, ...newData]);
        }
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não possível carregar as informações");
    } finally {
      setLoading(false);
    }
  }

  const onModalOpen = () => {
    modalizeRef.current?.open();
  };

  const onModalClose = () => {
    modalizeRef.current?.close();
  };

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<CharacterResultCardProps>) => (
      <View style={{ paddingHorizontal: 24, paddingTop: 16 }}>
        <CharacterResultCard
          {...item}
          onPress={() => navigate.navigate("CharacterDetails", { item })}
        />
      </View>
    ),
    [navigate]
  );

  const ListFooterComponent = (): JSX.Element => {
    if (!allDataLoaded && loading) {
      return <Loading />;
    }
    return <></>;
  };

  const handleLoadMore = useCallback(() => {
    if (!allDataLoaded && !loading) {
      setPage((prevPage: any) => prevPage + 1);
    }
  }, [allDataLoaded, loading]);

  const handleSelectWorldName = useCallback((worldName: string) => {
    setWorldName(worldName);
  }, []);

  useEffect(() => {
    fetchCurrentBazarList(page, worldName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, worldName]);

  if (loading && page === 1) {
    return <LoadingScreen />;
  }

  return (
    <View style={{ backgroundColor: "#FFF0D9", flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <FlashList
        data={data}
        keyExtractor={(item, index) => `${item.name} + ${index}`}
        ListHeaderComponentStyle={{
          marginTop: StatusBar.currentHeight,
        }}
        ListHeaderComponent={
          <Header
            title="Current Auctions"
            resultDescription="» Results: 3,196"
            onFilterPress={onModalOpen}
          />
        }
        contentContainerStyle={{
          backgroundColor: "#FFF0D9",
          paddingBottom: 80,
        }}
        renderItem={renderItem}
        ListFooterComponentStyle={{ paddingTop: 24 }}
        ListFooterComponent={ListFooterComponent}
        onEndReached={() => {
          if (!loading) {
            handleLoadMore();
          }
        }}
        onEndReachedThreshold={0.1}
        scrollEventThrottle={16}
        estimatedItemSize={234}
      />
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        disableScrollIfPossible={false}
        useNativeDriver
        modalTopOffset={ScreenHeight / 2}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        {WorldNames.map((item, index) => (
          <ModalOptionItem
            key={`${item.id} + ${index}`}
            optionName={item.name}
            onPress={() => {
              handleSelectWorldName(item.name);
              onModalClose();
            }}
          />
        ))}
      </Modalize>
    </View>
  );
}
