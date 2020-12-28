import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostCommonContentType } from "../hooks/api/types";

import { PostList } from "../types";
import { dateParser } from "../utils/utils";

type OwnProps = {
  postSummary: PostCommonContentType;
};

export const PostPageHeader: React.FC<OwnProps> = ({ postSummary }) => {
  return (
    <StyledContainer>
      <StyledTitle>{postSummary.title}</StyledTitle>
      <StyledInfoContainer>
        <StyledPublishDate>
          {dateParser(postSummary.publishDate)}
        </StyledPublishDate>
        {(postSummary.tags || []).map((tag) => (
          <StyledTag key={tag} to={`/tag/${tag}`}>
            #{tag}
          </StyledTag>
        ))}
      </StyledInfoContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: 40px;
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  font-weight: 400;
`;

const StyledInfoContainer = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

const StyledPublishDate = styled.span`
  padding-right: 5px;
`;

const StyledTag = styled(Link)`
  padding: 0 5px;
  font-weight: 100;
  font-family: "Noto Sans JP", sans-serif;
  color: #666666;

  &:hover {
    text-decoration: underline;
  }
`;
