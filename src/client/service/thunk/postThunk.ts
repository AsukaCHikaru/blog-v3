import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { getPost } from "../../hooks/api/apiCore";
import { fetchingPost, fetchedPost } from "../action/postActions";

export const callFetchPost = (postId: string) => async (
  dispatch: ThunkDispatch<{}, {}, Action>
) => {
  dispatch(fetchingPost());
  const postData = await getPost(postId);
  dispatch(fetchedPost({ data: postData }));
};
