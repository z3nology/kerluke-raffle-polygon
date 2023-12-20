export type StakedNFTDatas = {
  tokenId: number;
  stakedTime: number;
  monthPlan: number;
};

export type GetNFTDataContextValue = {
  stakedNFTs: StakedNFTDatas[] | undefined;
  reFetchOwnNFTs: () => Promise<any>;
};
