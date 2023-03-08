import {
  Character,
  Episode,
  Location,
} from "./src/graphql/__generated__/graphql";
import { DataType } from "./src/screens/CurrentAuction/types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CharacterDetails: { item: DataType };
    }
  }
}
