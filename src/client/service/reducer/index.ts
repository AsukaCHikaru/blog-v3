import { AxiosError } from "axios";
import { combineReducers, Reducer } from "redux";
import { assetReducer, AssetState } from "./assetReducer";
import { postListReducer, PostListState } from "./postListReducer";
import { postReducer, PostState } from "./postReducer";

export const STORE_STATUS = {
  IDLE: 1,
  PENDING: 2,
  SUCCEED: 200,
  FAILED: 900,
  NO_POST: 901,
} as const;
export type StoreStatus = typeof STORE_STATUS[keyof typeof STORE_STATUS];

export interface BaseState {
  status: StoreStatus;
  error?: AxiosError;
}

export interface RootState {
  postList: PostListState;
  post: PostState;
  asset: AssetState;
}

export const initialRootState: RootState = {
  postList: {
    list: [],
    status: STORE_STATUS.IDLE,
  },
  post: {
    data: {},
    status: STORE_STATUS.IDLE,
  },
  asset: {
    data: {},
    status: STORE_STATUS.IDLE,
  },
};

export const rootReducer: Reducer<RootState> = combineReducers({
  postList: postListReducer,
  post: postReducer,
  asset: assetReducer,
});
