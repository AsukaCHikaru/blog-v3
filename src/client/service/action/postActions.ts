import { AxiosError } from "axios";
import { Action } from "redux";
import { ContentfulEntry, PostContentType } from "../../hooks/api/types";

import { PostDetail } from "../../types";

export enum PostActionTypes {
  FETCHING_POST = "FETCHING_POST",
  FETCHED_POST = "FETCHED_POST",
  FAILED_FETCH_POST = "FAILED_FETCH_POST",
}

interface FetchingPost extends Action {
  type: PostActionTypes.FETCHING_POST;
}

export const fetchingPost = (): FetchingPost => {
  return { type: PostActionTypes.FETCHING_POST };
};

interface FetchedPostPayloadType {
  data: ContentfulEntry<PostContentType>;
  error?: AxiosError;
}

export interface FetchedPost extends Action {
  type: PostActionTypes.FETCHED_POST;
  payload: FetchedPostPayloadType;
}

export const fetchedPost = (data: FetchedPostPayloadType): FetchedPost => {
  return {
    type: PostActionTypes.FETCHED_POST,
    payload: data,
  };
};

export type PostAction = FetchingPost | FetchedPost;
