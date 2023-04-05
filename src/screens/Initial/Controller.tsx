import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Layout } from "./Layout";

export const Controller = () => {
  const navigate = useNavigation();

  const handleNavigate = () => {
    navigate.navigate("Home");
  };

  return <Layout handleNavigate={handleNavigate} />;
};
