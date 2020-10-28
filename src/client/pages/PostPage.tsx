import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../service/reducer";

interface OwnProps {}

interface ConnectedDispatchProps {
  callFetchPost: (postId: string) => void;
  callFetchPostList: () => void;
}
interface PostPageProps extends OwnProps, ConnectedDispatchProps {}

interface Params {
  postPath: string;
}

export const PostPage: React.FC<PostPageProps> = ({
  callFetchPost,
  callFetchPostList,
}) => {
  const { postPath } = useParams<Params>();
  const postList = useSelector((state: RootState) => state.postList);
  const post = useSelector((state: RootState) => state.post);

  React.useEffect(() => {
    callFetchPostList();
  }, []);

  const postId = React.useMemo(() => {
    return postList.list.find((post) => post.path === postPath)?.id;
  }, [postList]);

  React.useEffect(() => {
    if (postId && !post.data[postId]) callFetchPost(postId);
  }, [postId]);

  return (
    <StyledContainer>
      {postId && post?.data[postId]?.body}
      <Link to="/">back</Link>
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;
