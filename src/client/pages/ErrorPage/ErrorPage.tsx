import * as React from "react";
import styled from "styled-components";

import { PostListPageLayout } from "../../comonents/Layout";
import { ErrorPageHeader } from "../../comonents/ErrorPageHeader";
import { Link } from "react-router-dom";

type OwnProps = {};

export const ErrorPage: React.FC<OwnProps> = ({}) => {
  return (
    <PostListPageLayout>
      <ErrorPageHeader />
      <StyledMessage>
        Sorry, it seems like the page you are looking for is not found.
      </StyledMessage>
      <StyledLink to="/">Home</StyledLink>
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
