import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostCommonContentType } from "../types";

import { dateParser } from "../utils/utils";

type OwnProps = {
  postSummary: PostCommonContentType;
};

export const PostPageHeader: React.FC<OwnProps> = ({ postSummary }) => {
  return (
    <StyledContainer>
      <StyledTitle>{postSummary.title}</StyledTitle>
      <StyledDateLanContainer>
        <StyledPublishDate>
          {dateParser(postSummary.publishDate)}
        </StyledPublishDate>
      </StyledDateLanContainer>
      {postSummary.tags && (
        <StyledTagContainer>
          {postSummary.tags.map((tag) => (
            <StyledTag key={tag} to={`/tag/${tag}`}>
              #{tag}
            </StyledTag>
          ))}
        </StyledTagContainer>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: 40px;
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  line-hegiht: 70px;
  font-weight: 700;

  @media (max-width: 400px) {
    font-size: 30px;
    line-hegiht: 40px;
  }
`;

const StyledDateLanContainer = styled.div`
  margin-top: 10px;
  line-height: 1;
`;

const StyledTagContainer = styled.div`
  margin-top: 20px;
  line-height: 1;

  @media (max-width: 400px) {
    margin-top: 15px;
  }
`;

const StyledPublishDate = styled.span`
  margin-right: 20px;
  font-size: 20px;
  color: #7a7a7a;

  @media (max-width: 400px) {
    margin-right: 15px;
  }
`;

const StyledTag = styled(Link)`
  padding: 0 10px;
  font-weight: 100;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 20px;

  &:first-of-type {
    padding-left: 0;
  }

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
