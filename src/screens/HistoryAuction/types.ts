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
  handleLoadMore: () => void;
  handleSelectWorldName: (worldName: string) => void;
  handleNavigate: (item: CharacterResultCardProps) => void;
  handleSelectVocation: (vocationId: string) => void;
  handleSelectSort: (sortId: string, sortDirectionId: string) => void;
  onWorldModalOpen: () => void;
  onWorldModalClose: () => void;
  onVocationModalOpen: () => void;
  onVocationModalClose: () => void;
  onSortModalOpen: () => void;
  onSortModalClose: () => void;
  data: Array<QueryDataType>;
  loading: boolean;
  page: number;
  allDataLoaded: boolean;
  refreshControl?: React.ReactElement<RefreshControlProps> | undefined;
  worldModalRef: React.RefObject<IHandles>;
  vocationModalRef: React.RefObject<IHandles>;
  sortModalRef: React.RefObject<IHandles>;
}
