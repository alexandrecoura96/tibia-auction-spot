import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Alert,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CharacterResultCard } from "../../components/CharacterResultCard";
import { api } from "../../libs/axios";
import { HeaderTitle } from "./styles";
import { DataType } from "./types";

const header_background = require("../../assets/header_background.png");

export function CurrentAuction() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataType[]>([]);
  const navigate = useNavigation();

  async function fetchCurrentBazarList() {
    try {
      setLoading(true);
      const response = await api.get("/bazar", {
        params: { pageNumber: 1 },
      });

      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não possível carregar as informações");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCurrentBazarList();
  }, []);

  if (loading) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFF0D9",
          }}
        >
          <ActivityIndicator size={32} color="#5A2800" />
        </View>
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.name} + ${index}`}
        ListHeaderComponentStyle={{
          marginTop: StatusBar.currentHeight,
        }}
        ListHeaderComponent={
          <View>
            <ImageBackground
              source={header_background}
              resizeMode="contain"
              style={{
                height: 48,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HeaderTitle>Current Auctions</HeaderTitle>
            </ImageBackground>
            <Text
              style={{
                color: "#5A2800",
                fontSize: 12,
                fontWeight: "600",
                paddingTop: 16,
                paddingRight: 31,
                alignSelf: "flex-end",
              }}
            >
              » Results: 3,196
            </Text>
          </View>
        }
        contentContainerStyle={{
          backgroundColor: "#FFF0D9",
          paddingBottom: 80,
        }}
        // ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingHorizontal: 24, paddingTop: 16 }}>
              <CharacterResultCard
                {...item}
                onPress={() => navigate.navigate("CharacterDetails", { item })}
              />
            </View>
          );
        }}
      />
    </>
  );
}
