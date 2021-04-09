import * as React from "react";
import styled from "styled-components";

type OwnProps = {};

export const Footer: React.FC<OwnProps> = ({}) => {
  return (
    <StyledFooter>
      <StyledFooterContent>© 2020 </StyledFooterContent>
      <StyledFooterLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://asukachikaru.com"
      >
        asukachikaru.com
      </StyledFooterLink>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin-top: 40px;
  & span,
  a {
    font-family: "Courier New", Courier, "Noto Sans JP", monospace;
  }
`;

const StyledFooterContent = styled.span``;

const StyledFooterLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
