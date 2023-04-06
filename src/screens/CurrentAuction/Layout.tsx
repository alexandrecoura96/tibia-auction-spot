import React from "react";
import { useCallback } from "react";
import { StatusBar } from "react-native";
import { CharacterResultCard } from "../../components/CharacterResultCard";
import { CharacterResultCardProps } from "../../components/CharacterResultCard/types";
import { Header } from "../../components/Header";
import { LoadingScreen } from "../../components/LoadingScreen";
import { Loading } from "../../components/Loading";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Modalize } from "react-native-modalize";
import { WorldNames } from "../../utils/worldNames";
import { ModalOptionItem } from "../../components/ModalOptionItem";
import { ScreenHeight } from "../../utils/device";
import SafeAreaView from "react-native-safe-area-view";
import { Container } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { LayoutProps } from "./types";
import { VocationsNames } from "../../utils/vocations";
import { SortTypeNames } from "../../utils/sortType";

export const Layout = ({
  allDataLoaded,
  data,
  handleLoadMore,
  handleSelectWorldName,
  loading,
  onVocationModalClose,
  onVocationModalOpen,
  onWorldModalClose,
  onWorldModalOpen,
  page,
  worldModalRef,
  vocationModalRef,
  handleNavigate,
  refreshControl,
  handleSelectVocation,
  onSortModalClose,
  onSortModalOpen,
  sortModalRef,
  handleSelectSort,
}: LayoutProps): JSX.Element => {
  const theme = useTheme();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<CharacterResultCardProps>) => (
      <CharacterResultCard {...item} onPress={() => handleNavigate(item)} />
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
        refreshControl={refreshControl}
        data={data}
        keyExtractor={(item, index) => `${item.name} + ${index}`}
        ListHeaderComponentStyle={{
          marginTop: StatusBar.currentHeight,
        }}
        ListHeaderComponent={
          <Header
            title="Current Auctions"
            resultDescription="» Results"
            onWorldPress={onWorldModalOpen}
            onVocationPress={onVocationModalOpen}
            onSkillPress={onSortModalOpen}
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
        estimatedItemSize={234}
      />
      <Modalize
        ref={worldModalRef}
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
              onWorldModalClose();
            }}
          />
        ))}
      </Modalize>
      <Modalize
        ref={vocationModalRef}
        adjustToContentHeight
        disableScrollIfPossible={false}
        useNativeDriver
        modalTopOffset={ScreenHeight / 2}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        {VocationsNames.map((item, index) => (
          <ModalOptionItem
            key={`${item.id} + ${index}`}
            optionName={item.name}
            onPress={() => {
              handleSelectVocation(item.id);
              onVocationModalClose();
            }}
          />
        ))}
      </Modalize>
      <Modalize
        ref={sortModalRef}
        adjustToContentHeight
        disableScrollIfPossible={false}
        useNativeDriver
        modalTopOffset={ScreenHeight / 2}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        {SortTypeNames.map((item, index) => (
          <ModalOptionItem
            key={`${item.id} + ${index}`}
            optionName={item.name}
            onPress={() => {
              handleSelectSort(item.order_column, item.order_direction);
              onSortModalClose();
            }}
          />
        ))}
      </Modalize>
    </Container>
  );
};
