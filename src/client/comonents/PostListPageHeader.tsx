import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type OwnProps = {};

export const PostListPageHeader: React.FC<OwnProps> = ({}) => {
  return (
    <StyledContainer>
      <StyledTitle to="/">The work is undone.</StyledTitle>
      <StyledCategoryContainer>
        <StyledCatogry to="/">ALL</StyledCatogry>
        <StyledCatogry to="/category/gaming">GAMING</StyledCatogry>
        <StyledCatogry to="/category/programming">PROGRAMMING</StyledCatogry>
        <StyledCatogry to="/category/others">OTHERS</StyledCatogry>
      </StyledCategoryContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;

const StyledTitle = styled(Link)`
  font-size: 40px;
  font-weight: 700;
`;

const StyledCategoryContainer = styled.div``;

const StyledCatogry = styled(Link)``;
