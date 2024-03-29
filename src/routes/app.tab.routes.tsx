import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CurrentAuction } from "../screens/CurrentAuction";
import { HistoryAuction } from "../screens/HistoryAuction";
import HelmetSvg from "../assets/svg/helmet.svg";
import CompassSvg from "../assets/svg/compass.svg";
import AlertSvg from "../assets/svg/alert.svg";
import { Alert } from "../screens/Alert";

const Tab = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#F1E0C6" },
      }}
    >
      <Tab.Screen
        name="CurrentAuction"
        component={CurrentAuction}
        options={{
          headerShown: false,
          tabBarLabel: "Bazaar",
          tabBarInactiveTintColor: "#C98608",
          tabBarActiveTintColor: "#5A2800",

          tabBarIcon: () => <HelmetSvg />,
        }}
      />

      <Tab.Screen
        name="HistoryAuction"
        component={HistoryAuction}
        options={{
          headerShown: false,
          tabBarLabel: "History",
          tabBarInactiveTintColor: "#C98608",
          tabBarActiveTintColor: "#5A2800",
          tabBarIcon: () => <CompassSvg />,
        }}
      />

      <Tab.Screen
        name="Alert"
        component={Alert}
        options={{
          headerShown: false,
          tabBarLabel: "Alert",
          tabBarInactiveTintColor: "#C98608",
          tabBarActiveTintColor: "#5A2800",
          tabBarIcon: () => <AlertSvg />,
        }}
      />
    </Tab.Navigator>
  );
}
