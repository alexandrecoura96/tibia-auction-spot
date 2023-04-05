import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { GeneralDetailProps } from "../../components/GeneralDetails/types";
import { api } from "../../libs/axios";
import { Layout } from "./Layout";
import { MyRoute } from "./types";

export const Controller = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<MyRoute>();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<GeneralDetailProps[]>([]);

  async function fetchCharacterDetailsList(auctionId: number) {
    try {
      setLoading(true);
      const response = await api.get("/bazar/character-details", {
        params: { auctionId },
      });

      setData(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não possível carregar as informações");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacterDetailsList(params.item.auctionId);
  }, [params.item.auctionId]);

  return (
    <Layout loading={loading} data={data} goBack={goBack} params={params} />
  );
};
