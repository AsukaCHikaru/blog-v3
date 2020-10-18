import * as React from "react";

import { fetchPostList } from "./apiCore";
import { PostSummary } from "../../types";
import { BaseStoreState, STORE_STATUS } from "../../Context";

export interface PostListState extends BaseStoreState {
  list: PostSummary[];
}

const initialState: PostListState = {
  status: 1,
  list: [],
};

export const usePostListApi = () => {
  const [state, setState] = React.useState<PostListState>(initialState);

  const callFetchPostList = async (tag?: string, category?: string) => {
    const postList = await fetchPostList(tag, category);
    setState({ ...state, status: 3, list: postList });
  };

  return { postListState: state, callFetchPostList };
};
