import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../service/reducer";
import { PostPageHeader } from "../../comonents/PostPageHeader";
import { Footer } from "../../comonents/Footer";
import { PostPageFooter } from "../../comonents/PostPageFooter";

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

  const postSummary = React.useMemo(() => {
    return postList.list.find((post) => post.id === postId);
  }, [postId, post]);

  React.useEffect(() => {
    if (postId && !post.data[postId]) callFetchPost(postId);
  }, [postId]);

  if (!postId || !postSummary) {
    return <StyledContainer>LOADING</StyledContainer>;
  }

  return (
    <StyledContainer>
      <PostPageHeader postSummary={postSummary} />
      {post?.data[postId]?.body && post?.data[postId]?.body}
      <PostPageFooter />
      <Footer />
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;
