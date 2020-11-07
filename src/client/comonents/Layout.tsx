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
  margin: 25px 50px;

  @media all and (max-width: 1260px) {
    margin: 25px 40px;
  }
  @media all and (max-width: 768px) {
    margin: 25px 30px;
  }
  @media all and (max-width: 420px) {
    margin: 25px;
  }
`;

const StyledPostListPageContainer = styled(StyledContainer)``;

const StyledPostPageContainer = styled(StyledContainer)``;
