import React, { useCallback } from "react";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { View, StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { CharacterInsider } from "../../components/CharacterInsider";
import { GeneralDetails } from "../../components/GeneralDetails";
import { GeneralDetailProps } from "../../components/GeneralDetails/types";
import { LoadingScreen } from "../../components/LoadingScreen";
import { Container, HeaderTitle, HeaderWrapper } from "./styles";
import SafeAreaView from "react-native-safe-area-view";
import { LayoutProps } from "./types";
import { RFValue } from "react-native-responsive-fontsize";

export const Layout = ({
  loading,
  data,
  goBack,
  params,
}: LayoutProps): JSX.Element => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<GeneralDetailProps>) => {
      return <GeneralDetails {...item} />;
    },
    []
  );

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <FlashList
        keyExtractor={(item, index) => `${item.label} + ${index}`}
        estimatedItemSize={76}
        data={data}
        ListHeaderComponentStyle={{
          marginTop: StatusBar.currentHeight,
          paddingBottom: RFValue(16),
        }}
        ListHeaderComponent={
          <View style={{ paddingHorizontal: RFValue(24) }}>
            <HeaderWrapper>
              <BackButton onPress={goBack} />
              <HeaderTitle>Details Account</HeaderTitle>
            </HeaderWrapper>
            <CharacterInsider {...params.item} />
          </View>
        }
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: RFValue(80),
        }}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Container>
  );
};
