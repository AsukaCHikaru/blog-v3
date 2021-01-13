import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PostListPageLayout, StyledContents } from "../../comonents/Layout";
import { ErrorPageHeader } from "../../comonents/ErrorPageHeader";
import { Footer } from "../../comonents/Footer";

export const ErrorPage: React.FC = () => {
  return (
    <PostListPageLayout>
      <ErrorPageHeader />
      <StyledContents>
        <StyledMessage>
          Sorry, it seems like the page you are looking for is not found.
        </StyledMessage>
        <StyledLink to="/">Home</StyledLink>
      </StyledContents>
      <Footer />
    </PostListPageLayout>
  );
};

const StyledMessage = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 32px;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  line-height: 32px;
  text-decoration: underline;
`;
