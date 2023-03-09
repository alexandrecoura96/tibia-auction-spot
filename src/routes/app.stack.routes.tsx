import React from "react";
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from "@react-navigation/stack";
import { AppTabRoutes } from "./app.tab.routes";
import { Initial } from "../screens/Initial";
import { CharacterDetails } from "../screens/CharacterDetails";

const Stack = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Initial">
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={AppTabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
