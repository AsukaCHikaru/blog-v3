import * as React from "react";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";

import { usePostListApi } from "./hooks/api/postListApi";
import { PostDetail, PostSummary } from "./types";

export const STORE_STATUS = {
  IDLE: 1,
  PENDING: 2,
  SUCCEED: 3,
  FAILED: 9,
} as const;
type StoreStatus = typeof STORE_STATUS[keyof typeof STORE_STATUS];

export interface BaseStoreState {
  status: StoreStatus;
  error?: AxiosError;
}

export interface RootState {
  list: PostSummary[];
  post: Record<number, PostDetail>;
}

const initialState: RootState = {
  list: [],
  post: {},
};

export const PostListContext = React.createContext<RootState>(initialState);

interface Params {
  tag?: string;
  category?: string;
  postPath?: string;
}

export const Context: React.FC = ({ children }) => {
  const { tag, category, postPath } = useParams<Params>();
  const { postListState, callFetchPostList } = usePostListApi();

  React.useEffect(() => {
    if (postListState.status === STORE_STATUS.IDLE) {
      console.log("fetch post list");
      callFetchPostList();
    }
  }, [tag, category]);

  return (
    <PostListContext.Provider value={{ list: postListState.list, post: {} }}>
      {children}
    </PostListContext.Provider>
  );
};
