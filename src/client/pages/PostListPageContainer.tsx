import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { RootState } from "../service/reducer";
import { callFetchPostList } from "../service/thunk/postListThunk";
import { PostListPage } from "./PostListPage";

const mapStateToProps = (state: RootState) => {
  return {
    postList: state.postList,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return {
    callFetchPostList: () => dispatch(callFetchPostList()),
  };
};

export const PostListPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListPage);
