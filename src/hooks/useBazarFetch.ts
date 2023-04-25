import React, { useState } from "react";
import { api } from "../libs/axios";
import { QueryDataType } from "../screens/CurrentAuction/types";
import { Alert } from "react-native";

interface useBazarFetchProps {
  endpoint: string;
}

export const useBazarFetch = ({ endpoint }: useBazarFetchProps) => {
  const [loading, setLoading] = useState(true);
  const [lastWorldName, setLastWorldName] = useState<string>();
  const [lastVocationName, setLastVocationName] = useState<string>();
  const [lastOrderColumn, setLastOrderColumn] = useState<string>();
  const [lastOrderDirection, setLastOrderDirection] = useState<string>();
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const [data, setData] = useState<QueryDataType[]>([]);
  const [page, setPage] = useState<number>(1);

  async function fetchBazarList(
    pageNumber: number,
    worldName?: string,
    vocation?: string,
    order_column?: string,
    order_direction?: string
  ) {
    try {
      setLoading(true);
      const response = await api.get(endpoint, {
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
        if (
          order_column !== lastOrderColumn ||
          order_direction !== lastOrderDirection
        ) {
          setData(newData);
          setLastOrderColumn(order_column);
          setLastOrderDirection(order_direction);
        }
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

  return {
    data,
    page,
    allDataLoaded,
    loading,
    fetchBazarList,
    setPage,
    endpoint,
  };
};
