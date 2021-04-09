import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PostLanguage, PostList } from "../types";
import { dateParser } from "../utils/utils";

type OwnProps = {
  postSummary: PostList[number];
};

const postLanLabelText: Record<PostLanguage, string> = {
  enUS: "English",
  zhTW: "中文",
  jaJP: "日本語",
} as const;

export const PostLink: React.FC<OwnProps> = ({ postSummary }) => {
  return (
    <StyledContainer>
      <StyledPostTitle to={`/post/${postSummary.path}`}>
        {postSummary.title}
      </StyledPostTitle>
      <StyledPostDateLanContainer>
        <StyledPostPublishDate>
          {dateParser(postSummary.publishDate)}
        </StyledPostPublishDate>
        <StyledLan to={`/post/${postSummary.path}`}>
          {postLanLabelText[postSummary.language]}
        </StyledLan>
      </StyledPostDateLanContainer>
      {postSummary.tags && (
        <StyledPostTagContainer>
          {postSummary.tags.map((tag) => (
            <StyledPostTag key={tag} to={`/tag/${encodeURI(tag)}`}>
              #{tag}
            </StyledPostTag>
          ))}
        </StyledPostTagContainer>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: 40px;
`;

const StyledPostTitle = styled(Link)`
  font-size: 35px;
  line-height: 50px;

  @media (max-width: 400px) {
    font-size: 25px;
    line-height: 35px;
  }
`;

const StyledPostDateLanContainer = styled.div`
  margin-top: 15px;
  line-height: 1;

  @media (max-width: 400px) {
    margin-top: 10px;
  }
`;

const StyledPostTagContainer = styled.div`
  margin-top: 15px;
  line-height: 1;

  @media (max-width: 400px) {
    margin-top: 10px;
  }
`;

const StyledPostPublishDate = styled.span`
  margin-right: 15px;
  font-family: "Noto Serif JP", serif;
  font-size: 20px;
  color: #7a7a7a;

  @media (max-width: 400px) {
    margin-right: 10px;
    font-size: 15px;
  }
`;

const StyledLan = styled(Link)`
  font-family: "Noto Serif JP", serif;
  font-size: 20px;

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

const StyledPostTag = styled(Link)`
  margin-right: 15px;
  font-weight: 100;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 400px) {
    margin-right: 10px;
    font-size: 15px;
  }
`;
