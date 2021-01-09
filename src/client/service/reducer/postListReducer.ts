import { PostList, PostSummary } from "../../types";
import { STORE_STATUS, BaseState } from "./index";
import { PostListAction, PostListActionTypes } from "../action/postListActions";

export interface PostListState extends BaseState {
  list: PostList;
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
      const postList: PostList = action.payload.data.items.map((item) => {
        const { post, ...rest } = item.fields;
        return { ...rest, id: item.fields.post.sys.id };
      });

      postList.sort((prev, next) => (prev.no < next.no ? 1 : -1));

      return {
        ...state,
        status: STORE_STATUS.SUCCEED,
        list: postList,
      };
    default:
      return state;
  }
};
