import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { getAsset } from "../../hooks/api/apiCore";
import { fetchingAsset, fetchedAsset } from "../action/assetActions";

export const fetchAsset = (assetId: string) => async (
  dispatch: ThunkDispatch<{}, {}, Action>
) => {
  dispatch(fetchingAsset());
  const assetData = await getAsset(assetId);
  dispatch(fetchedAsset({ data: assetData }));
};
