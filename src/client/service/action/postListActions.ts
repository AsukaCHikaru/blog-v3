import { AxiosError } from "axios";
import { Action } from "redux";
import { PostListContentType } from "../../types";
import { ContentfulEntries } from "../../types/contentful";

export enum PostListActionTypes {
  FETCHING_POST_LIST = "FETCHING_POST_LIST",
  FETCHED_POST_LIST = "FETCHED_POST_LIST",
  FAILED_FETCH_POST_LIST = "FAILED_FETCH_POST_LIST",
}

interface FetchingPostList extends Action {
  type: PostListActionTypes.FETCHING_POST_LIST;
}

export const fetchingPostList = (): FetchingPostList => {
  return { type: PostListActionTypes.FETCHING_POST_LIST };
};

interface FetchedPostListPayloadType {
  data: ContentfulEntries<PostListContentType>;
  error?: AxiosError;
}

export interface FetchedPostList extends Action {
  type: PostListActionTypes.FETCHED_POST_LIST;
  payload: FetchedPostListPayloadType;
}

export const fetchedPostList = (
  data: FetchedPostListPayloadType
): FetchedPostList => {
  return {
    type: PostListActionTypes.FETCHED_POST_LIST,
    payload: data,
  };
};

export type PostListAction = FetchingPostList | FetchedPostList;
