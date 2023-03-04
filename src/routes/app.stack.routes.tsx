import React from "react";
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from "@react-navigation/stack";
import { AppTabRoutes } from "./app.tab.routes";
import { Initial } from "../screens/Initial";

const Stack = createStackNavigator();

export function AppStackRoutes() {
  const cardStyleInterpolatorAnim = ({
    current,
    layouts,
  }: StackCardInterpolationProps) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  };

  return (
    <Stack.Navigator initialRouteName="Initial">
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{
          headerShown: false,
          gestureDirection: "horizontal",
          cardStyleInterpolator: cardStyleInterpolatorAnim,
        }}
      />
      <Stack.Screen
        name="Home"
        component={AppTabRoutes}
        options={{
          headerShown: false,
          gestureDirection: "horizontal",
          cardStyleInterpolator: cardStyleInterpolatorAnim,
        }}
      />
      {/* <Stack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
        options={{
          headerShown: false,
          gestureDirection: "horizontal",
          cardStyleInterpolator: cardStyleInterpolatorAnim,
        }}
      /> */}
    </Stack.Navigator>
  );
}
