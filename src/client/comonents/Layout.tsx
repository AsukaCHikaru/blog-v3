import * as React from "react";
import styled from "styled-components";

type OwnProps = {};

export const PostListPageLayout: React.FC<OwnProps> = ({ children }) => {
  return <StyledPostListPageContainer>{children}</StyledPostListPageContainer>;
};

export const PostPageLayout: React.FC<OwnProps> = ({ children }) => {
  return <StyledPostPageContainer>{children}</StyledPostPageContainer>;
};

const StyledContainer = styled.div`
  max-width: 720px;
  margin: 43px auto;

  @media (max-width: 375px) {
    max-width: 330px;
    margin: 49px 22px;
  }
`;

const StyledPostListPageContainer = styled(StyledContainer)``;

const StyledPostPageContainer = styled(StyledContainer)``;
