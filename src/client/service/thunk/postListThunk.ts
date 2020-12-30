import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { getPostList } from "../../hooks/api/apiCore";
import { fetchingPostList, fetchedPostList } from "../action/postListActions";

export const fetchPostList = () => async (
  dispatch: ThunkDispatch<{}, {}, Action>
) => {
  dispatch(fetchingPostList());
  const postListData = await getPostList();
  dispatch(fetchedPostList({ data: postListData }));
};
