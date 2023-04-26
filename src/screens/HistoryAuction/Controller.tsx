import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { CharacterResultCardProps } from "../../components/CharacterResultCard/types";
import { Modalize } from "react-native-modalize";
import { Layout } from "./Layout";
import { useBazarFetch } from "../../hooks/useBazarFetch";

export const Controller = () => {
  const navigate = useNavigation();
  const worldModalRef = useRef<Modalize>(null);
  const vocationModalRef = useRef<Modalize>(null);
  const sortModalRef = useRef<Modalize>(null);
  const [worldName, setWorldName] = useState<string>("");
  const [vocationId, setVocationId] = useState<string>("");
  const [orderColumn, setOrderColumn] = useState<string>("");
  const [orderDirection, setOrderDirection] = useState<string>("");
  const [filterUpdated, setFilterUpdated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const { data, allDataLoaded, loading, page, fetchBazarList, setPage } =
    useBazarFetch({ endpoint: "/history" });

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
    fetchBazarList(1, worldName, vocationId).finally(() =>
      setRefreshing(false)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1, worldName, vocationId]);

  useEffect(() => {
    fetchBazarList(page, worldName, vocationId, orderColumn, orderDirection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, worldName, vocationId, orderColumn, orderDirection]);

  return (
    <Layout
      allDataLoaded={allDataLoaded}
      data={data}
      handleLoadMore={handleLoadMore}
      handleSelectWorldName={handleSelectWorldName}
      handleSelectVocation={handleSelectVocation}
      handleSelectSort={handleSelectSort}
      onWorldModalOpen={onWorldModalOpen}
      onWorldModalClose={onWorldModalClose}
      onVocationModalOpen={onVocationModalOpen}
      onVocationModalClose={onVocationModalClose}
      onSortModalOpen={onSortModalOpen}
      onSortModalClose={onSortModalClose}
      loading={loading}
      worldModalRef={worldModalRef}
      vocationModalRef={vocationModalRef}
      sortModalRef={sortModalRef}
      page={page}
      handleNavigate={handleNavigate}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};
