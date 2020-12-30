import { STORE_STATUS, BaseState } from ".";
import { PostAction, PostActionTypes } from "../action/postActions";
import { ContentfulRichTextContent } from "../../hooks/api/types";
import { AssetAction, AssetActionTypes } from "../action/assetActions";

export interface AssetState extends BaseState {
  data: Record<string, string>;
}

const initialState: AssetState = {
  status: 1,
  data: {},
};

export const assetReducer = (
  state: AssetState = initialState,
  action: AssetAction
): AssetState => {
  switch (action.type) {
    case AssetActionTypes.FETCHING_ASSET:
      return { ...state, status: STORE_STATUS.PENDING };
    case AssetActionTypes.FETCHED_ASSET:
      const assetId = action.payload.data.sys.id as string;
      return {
        ...state,
        data: {
          ...state.data,
          [assetId]: action.payload.data.fields.file.url,
        },
      };
    default:
      return state;
  }
};
