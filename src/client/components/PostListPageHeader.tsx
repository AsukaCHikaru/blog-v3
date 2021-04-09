import * as React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

type OwnProps = {
  selectedCategory?: string;
};

interface Params {
  tag?: string;
  category?: string;
}

export const PostListPageHeader: React.FC<OwnProps> = ({
  selectedCategory,
}) => {
  const { tag } = useParams<Params>();

  return (
    <StyledContainer>
      <StyledTitle to="/">The work is undone.</StyledTitle>
      <StyledCategoryTagContainer>
        <StyledCategoryContainer>
          <StyledCategory
            to="/"
            selected={selectedCategory === undefined && !tag}
          >
            ALL
          </StyledCategory>
          <StyledCategory
            to="/category/gaming"
            selected={selectedCategory === "gaming"}
          >
            GAMING
          </StyledCategory>
          <StyledCategory
            to="/category/programming"
            selected={selectedCategory === "programming"}
          >
            PROGRAMMING
          </StyledCategory>
          <StyledCategory
            to="/category/others"
            selected={selectedCategory === "others"}
          >
            OTHERS
          </StyledCategory>
          <StyledAboutLink
            href="https://asukachikaru.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            ABOUT
          </StyledAboutLink>
        </StyledCategoryContainer>
        {tag && <StyledSelectedTag>#{tag}</StyledSelectedTag>}
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

const StyledCategory = styled(Link)<{ selected: boolean }>`
  padding: 0 10px;
  font-family: "Courier New", Courier, "Noto Sans JP", monospace;
  font-size: 20px;
  line-height: 1;
  font-weight: 100;
  color: ${(props) => (props.selected ? "#131313" : "#7a7a7a")};
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};

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

const StyledSelectedTag = styled.span`
  padding: 0 10px;
  font-family: "Courier New", Courier, "Noto Sans JP", monospace;
  font-size: 20px;
  line-height: 1;
  font-weight: 100;
  color: #131313;
  text-decoration: underline;
  border-left: solid 1px #131313;

  @media (max-width: 400px) {
    font-size: 15px;
    border: none;
    padding: 0;
  }
`;

const StyledAboutLink = styled.a`
  padding: 0 10px;
  font-family: "Courier New", Courier, "Noto Sans JP", monospace;
  font-size: 20px;
  line-height: 1;
  font-weight: 100;
  border-left: solid 1px #131313;
  color: #7a7a7a;
  &:hover {
    text-decoration: underline;
  }
`;
