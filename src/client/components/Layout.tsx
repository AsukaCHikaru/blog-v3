import * as React from "react";
import styled from "styled-components";

type OwnProps = {};

export const PostListPageLayout: React.FC<OwnProps> = ({ children }) => {
  return (
    <StyledScroller>
      <StyledPostListPageContainer>{children}</StyledPostListPageContainer>;
    </StyledScroller>
  );
};

export const PostPageLayout: React.FC<OwnProps> = ({ children }) => {
  return (
    <StyledScroller>
      <StyledPostPageContainer>{children}</StyledPostPageContainer>
    </StyledScroller>
  );
};

const StyledScroller = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  margin: 0 auto;
  padding: 43px 0;

  @media (max-width: 400px) {
    max-width: 330px;
    margin: 49px 22px;
  }
`;

export const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledPostListPageContainer = styled(StyledContainer)``;

const StyledPostPageContainer = styled(StyledContainer)``;

export const StyledBottomContents = styled.div`
  position: relative;
  bottom: 40px;
`;
