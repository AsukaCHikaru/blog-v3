import * as Express from "express";
import { matchPath } from "react-router-dom";
import { createStore } from "redux";
import { getPostList } from "../client/hooks/api/apiCore";
import { routes } from "../client/routes";
import {
  initialRootState,
  rootReducer,
  STORE_STATUS,
} from "../client/service/reducer";
import { PostListState } from "../client/service/reducer/postListReducer";
import { PostList, PostListContentType } from "../client/types";
import { ContentfulEntries } from "../client/types/contentful";

export const initStore = async (req: Express.Request) => {
  const initialState = initialRootState;
  const postListPath = routes[0];
  const postPath = routes[1];
  let store = createStore(rootReducer, initialRootState);

  const postListData = await getPostList();
  const postListState = convertPostListResponseToState(postListData);

  if (!/fonts\.googleapis/.test(req.path)) {
    const match = matchPath(req.path, postPath);
    console.log("match", req.path, match);
    if (match !== null) {
      // console.log(postListState.list.find((postSummary) => postSummary.path === );
    }
  }

  return { postListState };
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
