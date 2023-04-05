import React from "react";
import { useCallback } from "react";
import { StatusBar } from "react-native";
import { CharacterResultCard } from "../../components/CharacterResultCard";
import { CharacterResultCardProps } from "../../components/CharacterResultCard/types";
import { Header } from "../../components/Header";
import { LoadingScreen } from "../../components/LoadingScreen";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Loading } from "../../components/Loading";
import { Modalize } from "react-native-modalize";
import { WorldNames } from "../../utils/worldNames";
import { ModalOptionItem } from "../../components/ModalOptionItem";
import { ScreenHeight } from "../../utils/device";
import SafeAreaView from "react-native-safe-area-view";
import { LayoutProps } from "./types";
import { Container } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";

export function Layout({
  allDataLoaded,
  data,
  handleLoadMore,
  handleSelectWorldName,
  loading,
  modalizeRef,
  onModalClose,
  onModalOpen,
  page,
  handleNavigate,
}: LayoutProps) {
  const theme = useTheme();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<CharacterResultCardProps>) => (
      <CharacterResultCard
        isFinished
        {...item}
        onPress={() => handleNavigate(item)}
      />
    ),
    [handleNavigate]
  );

  const ListFooterComponent = (): JSX.Element => {
    if (!allDataLoaded && loading) {
      return <Loading />;
    }
    return <></>;
  };

  if (loading && page === 1) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <FlashList
        data={data}
        keyExtractor={(item, index) => `${item.name} + ${index}`}
        ListHeaderComponentStyle={{
          marginTop: StatusBar.currentHeight,
        }}
        ListHeaderComponent={
          <Header
            title="History Auctions"
            resultDescription="» Results"
            onFilterPress={onModalOpen}
          />
        }
        contentContainerStyle={{
          backgroundColor: theme.colors.common.neutral,
          paddingBottom: RFValue(80),
        }}
        renderItem={renderItem}
        ListFooterComponentStyle={{ paddingTop: RFValue(24) }}
        ListFooterComponent={ListFooterComponent}
        onEndReached={() => {
          if (!loading) {
            handleLoadMore();
          }
        }}
        onEndReachedThreshold={0.1}
        scrollEventThrottle={16}
        estimatedItemSize={263}
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
    </Container>
  );
}
