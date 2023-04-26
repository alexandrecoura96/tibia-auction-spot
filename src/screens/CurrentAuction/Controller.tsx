import React, { useRef } from "react";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Modalize } from "react-native-modalize";
import { Layout } from "./Layout";
import { CharacterResultCardProps } from "../../components/CharacterResultCard/types";
import { useBazarFetch } from "../../hooks/useBazarFetch";

export const Controller = () => {
  const navigate = useNavigation();
  const worldModalRef = useRef<Modalize>(null);
  const vocationModalRef = useRef<Modalize>(null);
  const sortModalRef = useRef<Modalize>(null);
  const [vocationId, setVocationId] = useState<string>("");
  const [orderColumn, setOrderColumn] = useState<string>("");
  const [orderDirection, setOrderDirection] = useState<string>("");
  const [worldName, setWorldName] = useState<string>("");
  const [refreshing, setRefreshing] = useState(false);
  const [filterUpdated, setFilterUpdated] = useState(false);

  const { data, allDataLoaded, loading, page, fetchBazarList, setPage } =
    useBazarFetch({ endpoint: "/bazar" });

  const onWorldModalOpen = () => {
    worldModalRef.current?.open();
  };

  const onWorldModalClose = () => {
    worldModalRef.current?.close();
  };

  const onVocationModalOpen = () => {
    vocationModalRef.current?.open();
  };

  const onVocationModalClose = () => {
    vocationModalRef.current?.close();
  };

  const onSortModalOpen = () => {
    sortModalRef.current?.open();
  };

  const onSortModalClose = () => {
    sortModalRef.current?.close();
  };

  const handleLoadMore = useCallback(() => {
    if (!allDataLoaded && !loading) {
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [allDataLoaded, loading, setPage]);

  const handleSelectWorldName = useCallback(
    (worldName: string) => {
      setWorldName(worldName);
      setFilterUpdated(!filterUpdated);
    },
    [filterUpdated]
  );

  const handleSelectVocation = useCallback(
    (vocationId: string) => {
      setVocationId(vocationId);
      setFilterUpdated(!filterUpdated);
    },
    [filterUpdated]
  );

  const handleSelectSort = useCallback(
    (orderColumn: string, orderDirection: string) => {
      setOrderColumn(orderColumn);
      setOrderDirection(orderDirection);
      setFilterUpdated(!filterUpdated);
    },
    [filterUpdated]
  );

  const handleNavigate = (item: CharacterResultCardProps) => {
    navigate.navigate("CharacterDetails", { item });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchBazarList(
      1,
      worldName,
      vocationId,
      orderColumn,
      orderDirection
    ).finally(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1, worldName, vocationId, orderColumn, orderDirection]);

  useEffect(() => {
    fetchBazarList(page, worldName, vocationId, orderColumn, orderDirection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, worldName, vocationId, orderColumn, orderDirection]);

  return (
    <Layout
      onWorldModalOpen={onWorldModalOpen}
      onWorldModalClose={onWorldModalClose}
      onVocationModalOpen={onVocationModalOpen}
      onVocationModalClose={onVocationModalClose}
      onSortModalOpen={onSortModalOpen}
      onSortModalClose={onSortModalClose}
      handleLoadMore={handleLoadMore}
      handleSelectWorldName={handleSelectWorldName}
      handleSelectVocation={handleSelectVocation}
      handleSelectSort={handleSelectSort}
      data={data}
      loading={loading}
      page={page}
      allDataLoaded={allDataLoaded}
      worldModalRef={worldModalRef}
      vocationModalRef={vocationModalRef}
      sortModalRef={sortModalRef}
      handleNavigate={handleNavigate}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};
