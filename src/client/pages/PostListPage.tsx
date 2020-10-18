import * as React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { PostLink } from "../comonents/PostLink";
import { PostListContext, RootState } from "../Context";

interface OwnProps {}

interface Params {
  tag?: string;
  category?: string;
}

export const PostListPage: React.FC<OwnProps> = ({}) => {
  const { tag, category } = useParams<Params>();
  const state = React.useContext<RootState>(PostListContext);

  return (
    <StyledContainer>
      {state.list &&
        state.list.length > 0 &&
        state.list.map((post) => (
          <PostLink postSummary={post} key={post.path} />
        ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;
