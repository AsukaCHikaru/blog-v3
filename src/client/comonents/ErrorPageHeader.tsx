import * as React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export const ErrorPageHeader: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTitle to="/">The page is nonexist.</StyledTitle>
      <StyledCategoryTagContainer>
        <StyledCategoryContainer>
          <StyledCatogry to="/">ALL</StyledCatogry>
          <StyledCatogry to="/category/gaming">GAMING</StyledCatogry>
          <StyledCatogry to="/category/programming">PROGRAMMING</StyledCatogry>
          <StyledCatogry to="/category/others">OTHERS</StyledCatogry>
        </StyledCategoryContainer>
      </StyledCategoryTagContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: 40px;
`;

const StyledTitle = styled(Link)`
  font-size: 50px;
  line-height: 1;
  font-weight: 900;

  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

const StyledCategoryTagContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 400px) {
    margin-top: 15px;
  }
`;

const StyledCategoryContainer = styled.div`
  display: inline-block;
  
  @media (max-width: 400px) {
    margin-top: 15p;x
    display: block;
  }
`;

const StyledCatogry = styled(Link)`
  padding: 0 10px;
  font-family: "Courier New", Courier, "Noto Sans JP", monospace;
  font-size: 20px;
  line-height: 1;
  font-weight: 100;
  color: #131313;
  border-left: solid 1px #131313;

  &:hover {
    text-decoration: underline;
  }

  &:first-of-type {
    border-left: none;
    padding-left: 0;
  }

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
