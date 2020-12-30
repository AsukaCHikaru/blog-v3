import { AxiosError } from "axios";
import { Action } from "redux";
import { ContentfulAsset } from "../../hooks/api/types";

export enum AssetActionTypes {
  FETCHING_ASSET = "FETCHING_ASSET",
  FETCHED_ASSET = "FETCHED_ASSET",
  FAILED_FETCH_ASSET = "FAILED_FETCH_ASSET",
}

interface FetchingAsset extends Action {
  type: AssetActionTypes.FETCHING_ASSET;
}

export const fetchingAsset = (): FetchingAsset => {
  return { type: AssetActionTypes.FETCHING_ASSET };
};

interface FetchedAssetPayloadType {
  data: ContentfulAsset;
  error?: AxiosError;
}

export interface FetchedAsset extends Action {
  type: AssetActionTypes.FETCHED_ASSET;
  payload: FetchedAssetPayloadType;
}

export const fetchedAsset = (data: FetchedAssetPayloadType): FetchedAsset => {
  return {
    type: AssetActionTypes.FETCHED_ASSET,
    payload: data,
  };
};

export type AssetAction = FetchingAsset | FetchedAsset;
