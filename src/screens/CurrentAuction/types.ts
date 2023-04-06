import { RefreshControlProps } from "react-native";
import { IHandles } from "react-native-modalize/lib/options";
import { CharacterResultCardProps } from "../../components/CharacterResultCard/types";

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
  handleSelectWorldName: (worldName: string) => void;
  handleLoadMore: () => void;
  onModalOpen: () => void;
  onModalClose: () => void;
  data: Array<QueryDataType>;
  loading: boolean;
  page: number;
  allDataLoaded: boolean;
  modalizeRef: React.RefObject<IHandles>;
  handleNavigate: (item: CharacterResultCardProps) => void;
  refreshControl?: React.ReactElement<RefreshControlProps> | undefined;
}
