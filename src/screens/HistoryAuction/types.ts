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
  onModalOpen: () => void;
  onModalClose: () => void;
  handleLoadMore: () => void;
  handleSelectWorldName: (worldName: string) => void;
  handleNavigate: (item: CharacterResultCardProps) => void;
  data: Array<QueryDataType>;
  loading: boolean;
  page: number;
  allDataLoaded: boolean;
  modalizeRef: React.RefObject<IHandles>;
}
