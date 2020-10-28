import { AxiosError } from "axios";
import { combineReducers, Reducer } from "redux";
import { postListReducer, PostListState } from "./postListReducer";
import { postReducer, PostState } from "./postReducer";

export const STORE_STATUS = {
  IDLE: 1,
  PENDING: 2,
  SUCCEED: 3,
  FAILED: 9,
} as const;
export type StoreStatus = typeof STORE_STATUS[keyof typeof STORE_STATUS];

export interface BaseState {
  status: StoreStatus;
  error?: AxiosError;
}

export interface RootState {
  postList: PostListState;
  post: PostState;
}

export const rootReducer: Reducer<RootState> = combineReducers({
  postList: postListReducer,
  post: postReducer,
});
