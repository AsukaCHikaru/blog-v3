import { PostDetail } from "../../types";
import { StoreStatus, STORE_STATUS, BaseState } from ".";
import { PostAction, PostActionTypes } from "../action/postActions";

export interface PostState extends BaseState {
  data: Record<string, PostDetail>;
}

const initialState: PostState = {
  status: 1,
  data: {},
};

export const postReducer = (
  state: PostState = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCHING_POST:
      return { ...state, status: STORE_STATUS.PENDING };
    case PostActionTypes.FETCHED_POST:
      const postId = action.payload.data.id;
      return {
        ...state,
        status: STORE_STATUS.SUCCEED,
        data: {
          ...state.data,
          [postId]: action.payload.data,
        },
      };
    default:
      return state;
  }
};
