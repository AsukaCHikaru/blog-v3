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

const StyledContainer = styled.div`
  margin: 1em 0;
`;

const StyledPostTitle = styled(Link)`
  font-size: 32px;
  font-weight: 400;
`;

const StyledPostDateTagContainer = styled.div`
  color: #343434;
  font-size: 18px;
`;

const StyledPostPublishDate = styled.span`
  margin-right: 10px;
  font-family: "Noto Serif JP", serif;
`;

const StyledPostTag = styled(Link)`
  margin-right: 10px;
  font-weight: 100;
  font-family: "Noto Sans JP", sans-serif;
  color: #666666;

  &:hover {
    text-decoration: underline;
  }
`;
