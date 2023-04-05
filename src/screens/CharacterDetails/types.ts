import { Route } from "@react-navigation/native";
import { GeneralDetailProps } from "../../components/GeneralDetails/types";

type Params = {
  item: QueryDataType;
};

export type MyRoute = Route<"CurrentAuction", Params>;

export interface QueryDataType {
  name: string;
  level: string;
  gender: string;
  vocation: string;
  world: string;
  auctionStart: string;
  auctionEnd: string;
  bid: string;
  outfitUrl: string;
  charactersFeatures: Array<string>;
  inProgress: string;
  status?: string;
  auctionId: number;
}

export interface LayoutProps {
  loading: boolean;
  data: GeneralDetailProps[];
  params: Readonly<Params>;
  goBack: () => void;
}
