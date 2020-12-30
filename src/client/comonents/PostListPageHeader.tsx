import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type OwnProps = {
  selectedCategory?: string;
};

export const PostListPageHeader: React.FC<OwnProps> = ({
  selectedCategory,
}) => {
  return (
    <StyledContainer>
      <StyledTitle to="/">The work is undone.</StyledTitle>
      <StyledCategoryContainer>
        <StyledCatogry to="/" selected={selectedCategory === undefined}>
          ALL
        </StyledCatogry>
        <StyledCatogry
          to="/category/gaming"
          selected={selectedCategory === "gaming"}
        >
          GAMING
        </StyledCatogry>
        <StyledCatogry
          to="/category/programming"
          selected={selectedCategory === "programming"}
        >
          PROGRAMMING
        </StyledCatogry>
        <StyledCatogry
          to="/category/others"
          selected={selectedCategory === "others"}
        >
          OTHERS
        </StyledCatogry>
      </StyledCategoryContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: 40px;
`;

const StyledTitle = styled(Link)`
  font-size: 50px;
  font-weight: 900;
`;

const StyledCategoryContainer = styled.div`
  margin-top: 10px;
`;

const StyledCatogry = styled(Link)<{ selected: boolean }>`
  padding: 0 10px;
  font-family: "Courier New", Courier, "Noto Sans JP", monospace;
  font-size: 20px;
  font-weight: 100;
  color: ${(props) => (props.selected ? "#131313" : "#666666")};
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};

  border-left: solid 1px #131313;

  &:hover {
    text-decoration: underline;
  }

  &:first-of-type {
    border-left: none;
    padding-left: 0;
  }
`;
