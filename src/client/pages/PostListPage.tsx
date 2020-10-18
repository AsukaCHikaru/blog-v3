import * as React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PostLink } from "../comonents/PostLink";

import { fetchPostList } from "../hooks/api/apiCore";
import { PostSummary } from "../types";

interface OwnProps {}

interface Params {
  tag?: string;
  category?: string;
}

export const PostListPage: React.FC<OwnProps> = ({}) => {
  const { tag, category } = useParams<Params>();
  const [posts, setPosts] = React.useState<PostSummary[] | null>(null);

  const fetch = React.useCallback(async () => {
    const posts = await fetchPostList(tag, category);
    setPosts(posts);
  }, [tag, category]);

  React.useEffect(() => {
    console.log(tag, category);
  }, [tag, category]);

  React.useEffect(() => {
    fetch();
  }, [tag, category]);

  return (
    <StyledContainer>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <PostLink postSummary={post} key={post.path} />)}
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;
