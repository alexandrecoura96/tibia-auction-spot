import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialIcons";
import CommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { CurrentAuction } from "../screens/CurrentAuction";
import { HistoryAuction } from "../screens/HistoryAuction";

const Tab = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="CurrentAuction"
        component={CurrentAuction}
        options={{
          headerShown: false,
          tabBarLabel: "Current",
          tabBarInactiveTintColor: "#979797",
          tabBarActiveTintColor: "#116d3a",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-cart"
              size={25}
              color={focused ? "#116d3a" : "#979797"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="HistoryAuction"
        component={HistoryAuction}
        options={{
          headerShown: false,
          tabBarLabel: "History",
          tabBarInactiveTintColor: "#979797",
          tabBarActiveTintColor: "#116d3a",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="history"
              size={25}
              color={focused ? "#116d3a" : "#979797"}
            />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          headerShown: false,
          tabBarLabel: "Locations",
          tabBarInactiveTintColor: "#979797",
          tabBarActiveTintColor: "#116d3a",
          tabBarIcon: ({ focused }) => (
            <CommunityIcon
              name="map-marker-outline"
              size={25}
              color={focused ? "#116d3a" : "#979797"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Episodes"
        component={Episodes}
        options={{
          headerShown: false,
          tabBarLabel: "Episodes",
          tabBarInactiveTintColor: "#979797",
          tabBarActiveTintColor: "#116d3a",
          tabBarIcon: ({ focused }) => (
            <CommunityIcon
              name="play-box-outline"
              size={25}
              color={focused ? "#116d3a" : "#979797"}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
