import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { CharacterResultCardProps } from "../../components/CharacterResultCard/types";
import { api } from "../../libs/axios";
import { Modalize } from "react-native-modalize";
import { Layout } from "./Layout";
import { QueryDataType } from "./types";

export const Controller = () => {
  const navigate = useNavigation();
  const modalizeRef = useRef<Modalize>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<QueryDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const [worldName, setWorldName] = useState<string>("");
  const [lastWorldName, setLastWorldName] = useState<string>();

  async function fetchHistoryBazarList(pageNumber: number, worldName?: string) {
    try {
      setLoading(true);
      const response = await api.get("/history", {
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

  const handleLoadMore = useCallback(() => {
    if (!allDataLoaded && !loading) {
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [allDataLoaded, loading]);

  const handleSelectWorldName = useCallback((worldName: string) => {
    setWorldName(worldName);
  }, []);

  const handleNavigate = (item: CharacterResultCardProps) => {
    navigate.navigate("CharacterDetails", { item });
  };

  useEffect(() => {
    fetchHistoryBazarList(page, worldName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, worldName]);

  return (
    <Layout
      allDataLoaded={allDataLoaded}
      data={data}
      handleLoadMore={handleLoadMore}
      handleSelectWorldName={handleSelectWorldName}
      loading={loading}
      modalizeRef={modalizeRef}
      onModalClose={onModalClose}
      onModalOpen={onModalOpen}
      page={page}
      handleNavigate={handleNavigate}
    />
  );
};
