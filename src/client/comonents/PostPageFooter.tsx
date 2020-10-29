import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type OwnProps = {};

export const PostPageFooter: React.FC<OwnProps> = ({}) => {
  return (
    <StyledContainer>
      <StyledTitle to="/">The work is undone.</StyledTitle>
      <StyledCategoryContainer>
        <StyledCategory to="/category/gaming">GAMING</StyledCategory>
        <StyledCategory to="/category/programming">PROGRAMMING</StyledCategory>
        <StyledCategory to="/category/others">OTHERS</StyledCategory>
      </StyledCategoryContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;

const StyledTitle = styled(Link)``;

const StyledCategoryContainer = styled.div``;

const StyledCategory = styled(Link)``;
