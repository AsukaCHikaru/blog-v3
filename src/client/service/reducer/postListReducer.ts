import { PostSummary } from "../../types";
import { StoreStatus, STORE_STATUS, BaseState } from ".";
import { PostListAction, PostListActionTypes } from "../action/postListActions";

export interface PostListState extends BaseState {
  list: PostSummary[];
}

const initialState: PostListState = {
  status: 1,
  list: [],
};

export const postListReducer = (
  state: PostListState = initialState,
  action: PostListAction
): PostListState => {
  switch (action.type) {
    case PostListActionTypes.FETCHING_POST_LIST:
      return { ...state, status: STORE_STATUS.PENDING };
    case PostListActionTypes.FETCHED_POST_LIST:
      return {
        ...state,
        status: STORE_STATUS.SUCCEED,
        list: action.payload.data,
      };
    default:
      return state;
  }
};
