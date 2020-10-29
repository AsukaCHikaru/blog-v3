import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type OwnProps = {};

export const Footer: React.FC<OwnProps> = ({}) => {
  return (
    <StyledFooter>
      <StyledFooterContent>© 2020</StyledFooterContent>
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

const StyledFooter = styled.footer``;

const StyledFooterContent = styled.span``;

const StyledFooterLink = styled.a``;
