import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PostSummary } from "../types";

type OwnProps = {
  postSummary: PostSummary;
};

export const PostPageHeader: React.FC<OwnProps> = ({ postSummary }) => {
  return (
    <StyledContainer>
      <StyledTitle>{postSummary.title}</StyledTitle>
      <StyledInfoContainer>
        <StyledPublishDate>{postSummary.publishDate}</StyledPublishDate>
        {postSummary.tags.map((tag) => (
          <StyledTag key={tag} to={`/tag/${tag}`}>
            {tag}
          </StyledTag>
        ))}
      </StyledInfoContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;

const StyledTitle = styled.h1``;

const StyledInfoContainer = styled.div``;

const StyledPublishDate = styled.span``;

const StyledTag = styled(Link)``;
