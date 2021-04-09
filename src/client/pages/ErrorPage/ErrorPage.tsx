import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PostListPageLayout, StyledContents } from "../../components/Layout";
import { ErrorPageHeader } from "../../components/ErrorPageHeader";
import { Footer } from "../../components/Footer";

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
