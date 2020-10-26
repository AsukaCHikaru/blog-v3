import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { PostLink } from "../comonents/PostLink";
import { RootState, STORE_STATUS } from "../service/reducer";

interface OwnProps {}
interface ConnectedDispatchProps {
  callFetchPostList: () => void;
}
interface PostListPageProps extends OwnProps, ConnectedDispatchProps {}

interface Params {
  tag?: string;
  category?: string;
}

export const PostListPage: React.FC<PostListPageProps> = ({
  callFetchPostList,
}) => {
  const { tag, category } = useParams<Params>();
  const postList = useSelector((state: RootState) => state.postList);

  React.useEffect(() => {
    if (postList.status === STORE_STATUS.IDLE) callFetchPostList();
  }, []);

  return (
    <StyledContainer>
      <h1>The work is undone.</h1>
      {postList.list &&
        postList.list.length > 0 &&
        postList.list.map((post) => (
          <PostLink postSummary={post} key={post.path} />
        ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;
