import { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { api } from "../../libs/axios";
import { DataType } from "./types";

export function CurrentAuction() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataType[]>([]);

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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={32} color="#00CB00" />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `${item.name} + ${index}`}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#f1e0c6",
              marginTop: 8,
              borderRadius: 8,
              padding: 16,
              backgroundColor: "#f1e0c6",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Image
                source={{ uri: item.outfitUrl }}
                style={{
                  height: 100,
                  width: 100,
                }}
              />
              <View>
                <Text>Name: {item.name}</Text>
                <Text>Vocation: {item.vocation}</Text>
                <Text>Level: {item.level}</Text>
                <Text>World: {item.world}</Text>
              </View>
            </View>
            <View style={{ marginTop: 24 }}>
              <Text>Current Bid: {item.bid}</Text>
              <Text>Auction Start: {item.auctionStart}</Text>
              <Text>Auction End: {item.auctionEnd}</Text>
            </View>
          </View>
        );
      }}
    />
  );
}
