import React from "react";
import { useState } from "react";
import { api } from "../libs/axios";
import { GeneralDetailProps } from "../components/GeneralDetails/types";
import { Alert } from "react-native";

export const useCharacterDetailsFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<GeneralDetailProps[]>([]);

  async function fetchCharacterDetailsList(auctionId: number) {
    try {
      setLoading(true);
      const response = await api.get("/bazar/character-details", {
        params: { auctionId },
      });

      console.log(response);

      setData(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não possível carregar as informações");
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    fetchCharacterDetailsList,
  };
};
