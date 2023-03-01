import { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import { api } from "../../libs/axios";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [world, setWorld] = useState("Visabra");

  async function fetchTibiansOnline() {
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
    fetchTibiansOnline();
  }, []);
  console.log(data);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        {loading ? (
          <Text>Carregando informações</Text>
        ) : (
          data.map((item) => {
            return (
              <View>
                <Text>{item.name}</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "black",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.outfitUrl }}
                    style={{
                      height: 150,
                      width: 150,
                      resizeMode: "cover",
                    }}
                  />
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}
