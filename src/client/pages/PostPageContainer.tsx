import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { RootState } from "../service/reducer";
import { callFetchPostList } from "../service/thunk/postListThunk";
import { callFetchPost } from "../service/thunk/postThunk";
import { PostPage } from "./PostPage";

const mapStateToProps = (state: RootState) => {
  return {
    post: state.post,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return {
    callFetchPost: (postId: string) => dispatch(callFetchPost(postId)),
    callFetchPostList: () => dispatch(callFetchPostList()),
  };
};

export const PostPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
