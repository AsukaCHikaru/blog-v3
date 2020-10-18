import * as React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchPost, fetchPostList } from "../hooks/api/apiCore";
import { PostDetail, PostSummary } from "../types";

interface OwnProps {}

interface Params {
  postPath: string;
}

export const PostPage: React.FC<OwnProps> = ({}) => {
  const [postDetail, setPostDetail] = React.useState<PostDetail>();
  const { postPath } = useParams<Params>();

  const fetch = async () => {
    const posts: PostSummary[] = await fetchPostList();
    console.log(posts);

    const postId = posts.find((post) => post.path === postPath)?.id || "1";
    console.log(postId);

    const postDetailData = await fetchPost(postId);
    console.log(postDetailData);

    setPostDetail(postDetailData);
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return (
    <StyledContainer>
      {postDetail?.body}
      <Link to="/">back</Link>
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;
