import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../service/reducer";
import { PostPageHeader } from "../../comonents/PostPageHeader";
import { Footer } from "../../comonents/Footer";
import { PostPageFooter } from "../../comonents/PostPageFooter";
import { PostBody } from "../../comonents/PostBody";
import { PostPageLayout } from "../../comonents/Layout";
import { Helmet } from "../../comonents/Helmet";
import { useScrollTop } from "../../hooks/useScrollTop";

interface OwnProps {}

interface ConnectedDispatchProps {
  fetchPost: (postId: string) => void;
  fetchPostList: () => void;
  fetchAsset: (assetId: string) => void;
}
interface PostPageProps extends OwnProps, ConnectedDispatchProps {}

interface Params {
  postPath: string;
}

export const PostPage: React.FC<PostPageProps> = ({
  fetchPost,
  fetchPostList,
  fetchAsset,
}) => {
  const { postPath } = useParams<Params>();
  const postList = useSelector((state: RootState) => state.postList);
  const post = useSelector((state: RootState) => state.post);

  useScrollTop();

  React.useEffect(() => {
    fetchPostList();
  }, []);

  const postId = React.useMemo(() => {
    return postList.list.find((post) => post.path === postPath)?.id;
  }, [postList]);

  React.useEffect(() => {
    if (!postId) {
      return;
    }
    post?.data[postId]?.forEach((content) => {
      if (content.nodeType === "embedded-asset-block" && content.data.target) {
        fetchAsset(content.data.target.sys.id);
      }
    });
  }, [post]);

  const postSummary = React.useMemo(() => {
    return postList.list.find((post) => post.id === postId);
  }, [postId, post]);

  React.useEffect(() => {
    if (postId && !post.data[postId]) fetchPost(postId);
  }, [postId]);

  if (!postId || !postSummary) {
    return <StyledContainer>LOADING</StyledContainer>;
  }

  return (
    <PostPageLayout>
      <Helmet title={postSummary.title} description={postSummary.preview} />
      <StyledContainer>
        <PostPageHeader postSummary={postSummary} />
        {post?.data[postId] ? (
          <PostBody postBody={post?.data[postId]} />
        ) : (
          <>
            <PostBody postBody={postSummary.preview} />
            ...
          </>
        )}
        <PostPageFooter />
        <Footer />
      </StyledContainer>
    </PostPageLayout>
  );
};

const StyledContainer = styled.div``;
