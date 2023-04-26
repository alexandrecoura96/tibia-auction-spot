import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Layout } from "./Layout";
import { MyRoute } from "./types";
import { useCharacterDetailsFetch } from "../../hooks/useCharacterDetailsFetch";

export const Controller = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<MyRoute>();

  const { data, fetchCharacterDetailsList, loading } =
    useCharacterDetailsFetch();

  useEffect(() => {
    fetchCharacterDetailsList(params.item.auctionId);
  }, [fetchCharacterDetailsList, params.item.auctionId]);

  return (
    <Layout loading={loading} data={data} goBack={goBack} params={params} />
  );
};
