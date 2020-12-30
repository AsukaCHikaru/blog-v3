import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { RootState } from "../../service/reducer";
import { fetchAsset } from "../../service/thunk/assetThunk";
import { fetchPostList } from "../../service/thunk/postListThunk";
import { fetchPost } from "../../service/thunk/postThunk";

import { PostPage } from "./PostPage";

const mapStateToProps = (state: RootState) => {
  return {
    post: state.post,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return {
    fetchPost: (postId: string) => dispatch(fetchPost(postId)),
    fetchPostList: () => dispatch(fetchPostList()),
    fetchAsset: (assetId: string) => dispatch(fetchAsset(assetId)),
  };
};

export const PostPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
