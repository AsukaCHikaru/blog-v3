import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PostSummary } from "../types";

type OwnProps = {
  postSummary: PostSummary;
};

export const PostLink: React.FC<OwnProps> = ({ postSummary }) => {
  return (
    <StyledContainer>
      <StyledPostTitle to={`/post/${postSummary.path}`}>
        {postSummary.title}
      </StyledPostTitle>
      <StyledPostDateTagContainer>
        <StyledPostPublishDate>{postSummary.publishDate}</StyledPostPublishDate>
        {postSummary.tags.map((tag) => (
          <StyledPostTag key={tag} to={`/tag/${encodeURI(tag)}`}>
            #{tag}
          </StyledPostTag>
        ))}
      </StyledPostDateTagContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;

const StyledPostTitle = styled(Link)``;

const StyledPostDateTagContainer = styled.div``;

const StyledPostPublishDate = styled.span``;

const StyledPostTag = styled(Link)``;
