import React, { useRef } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { QueryDataType } from "./types";
import { api } from "../../libs/axios";
import { Modalize } from "react-native-modalize";
import { Layout } from "./Layout";
import { CharacterResultCardProps } from "../../components/CharacterResultCard/types";

export const Controller = () => {
  const navigate = useNavigation();
  const modalizeRef = useRef<Modalize>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<QueryDataType[]>([]);
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

  const handleLoadMore = useCallback(() => {
    if (!allDataLoaded && !loading) {
      setPage((prevPage: any) => prevPage + 1);
    }
  }, [allDataLoaded, loading]);

  const handleSelectWorldName = useCallback((worldName: string) => {
    setWorldName(worldName);
  }, []);

  const handleNavigate = (item: CharacterResultCardProps) => {
    navigate.navigate("CharacterDetails", { item });
  };

  useEffect(() => {
    fetchCurrentBazarList(page, worldName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, worldName]);

  return (
    <Layout
      onModalClose={onModalClose}
      onModalOpen={onModalOpen}
      handleLoadMore={handleLoadMore}
      handleSelectWorldName={handleSelectWorldName}
      data={data}
      loading={loading}
      page={page}
      allDataLoaded={allDataLoaded}
      modalizeRef={modalizeRef}
      handleNavigate={handleNavigate}
    />
  );
};
