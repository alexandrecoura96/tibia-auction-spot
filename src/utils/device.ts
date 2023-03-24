import { Dimensions, Platform } from "react-native";

export const Height = Dimensions.get("window").height;
export const Width = Dimensions.get("window").width;
export const ScreenHeight = Dimensions.get("screen").height;
export const ScreenWidth = Dimensions.get("screen").width;
export const IsIos = Platform.OS === "ios";
