import * as Express from "express";
import { matchPath } from "react-router-dom";
import { createStore } from "redux";

import { getPost, getPostList } from "../client/hooks/api/apiCore";
import { routes } from "../client/routes";
import {
  initialRootState,
  rootReducer,
  STORE_STATUS,
} from "../client/service/reducer";
import { PostListState } from "../client/service/reducer/postListReducer";
import { PostState } from "../client/service/reducer/postReducer";
import {
  PostContentType,
  PostList,
  PostListContentType,
} from "../client/types";
import { ContentfulEntries, ContentfulEntry } from "../client/types/contentful";

export const initStore = async (req: Express.Request) => {
  const postPath = routes[1];
  let store = createStore(rootReducer, initialRootState);

  const postListData = await getPostList();
  const postListState = convertPostListResponseToState(postListData);
  let postState: PostState = { status: STORE_STATUS.IDLE, data: {} };

  if (!/fonts\.googleapis/.test(req.path)) {
    const match = matchPath<{ postPath: string }>(req.path, postPath);
    if (match !== null) {
      const postSummary = postListState.list.find(
        (postSummary) => postSummary.path === match.params.postPath
      );
      if (postSummary?.id) {
        const postData = await getPost(postSummary?.id);
        postState = convertPostResponseToState(postSummary.id, postData);
      } else {
        postState.status = STORE_STATUS.POST_NOT_FOUND;
      }
    }
  }

  return { postListState, postState };
};

const convertPostListResponseToState = (
  data: ContentfulEntries<PostListContentType>
): PostListState => {
  const postList: PostList = data.items.map((item) => {
    const { post, ...rest } = item.fields;
    return { ...rest, id: item.fields.post.sys.id };
  });

  postList.sort((prev, next) => (prev.no < next.no ? 1 : -1));

  return {
    list: postList,
    status: STORE_STATUS.SUCCEED,
  };
};

const convertPostResponseToState = (
  postId: string,
  data: ContentfulEntry<PostContentType>
): PostState => {
  return {
    data: {
      [postId]: data.fields.body.content,
    },
    status: STORE_STATUS.SUCCEED,
  };
};
