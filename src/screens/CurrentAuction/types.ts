export interface DataType {
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
}
