import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert, RefreshControl } from "react-native";
import { CharacterResultCardProps } from "../../components/CharacterResultCard/types";
import { api } from "../../libs/axios";
import { Modalize } from "react-native-modalize";
import { Layout } from "./Layout";
import { QueryDataType } from "./types";

export const Controller = () => {
  const navigate = useNavigation();
  const worldModalRef = useRef<Modalize>(null);
  const vocationModalRef = useRef<Modalize>(null);
  const sortModalRef = useRef<Modalize>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<QueryDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const [worldName, setWorldName] = useState<string>("");
  const [vocationId, setVocationId] = useState<string>("");
  const [orderColumn, setOrderColumn] = useState<string>("");
  const [orderDirection, setOrderDirection] = useState<string>("");
  const [lastWorldName, setLastWorldName] = useState<string>();
  const [lastVocationName, setLastVocationName] = useState<string>();
  const [lastOrderColumn, setLastOrderColumn] = useState<string>();
  const [lastOrderDirection, setLastOrderDirection] = useState<string>();
  const [filterUpdated, setFilterUpdated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchHistoryBazarList(
    pageNumber: number,
    worldName?: string,
    vocation?: string,
    order_column?: string,
    order_direction?: string
  ) {
    try {
      setLoading(true);
      const response = await api.get("/history", {
        params: {
          pageNumber,
          worldName,
          vocation,
          order_column,
          order_direction,
        },
      });
      const newData = response.data;
      if (newData.length === 0) {
        setAllDataLoaded(true);
      } else {
        setData(newData);
        setLastOrderColumn(order_column);
        setLastOrderDirection(order_direction);
        if (worldName !== lastWorldName) {
          setData(newData);
          setLastWorldName(worldName);
        }

        if (vocation !== lastVocationName) {
          setData(newData);
          setLastVocationName(vocation);
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
  }, [allDataLoaded, loading]);

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
    fetchHistoryBazarList(1, worldName, vocationId).finally(() =>
      setRefreshing(false)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1, worldName, vocationId]);

  useEffect(() => {
    fetchHistoryBazarList(
      page,
      worldName,
      vocationId,
      orderColumn,
      orderDirection
    );
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
