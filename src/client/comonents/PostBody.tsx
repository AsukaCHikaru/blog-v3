import * as React from "react";
import styled from "styled-components";

import { ContentfulRichTextContent } from "../hooks/api/types";
import { postBodyParser } from "../utils/postBodyParser";

type OwnProps = {
  postBody: ContentfulRichTextContent["content"];
};

export const PostBody: React.FC<OwnProps> = ({ postBody }) => {
  if (!postBody) return null;

  return (
    <StyledWrapper>
      <StyledBody>
        {postBody.map((content, index) => postBodyParser(content, index))}
      </StyledBody>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledBody = styled.div`
  p {
    margin-bottom: 27px;
    font-size: 18px;
    line-height: 2;
    white-space: pre-wrap;

    & code {
      padding: 0 5px;
      display: inline-block;
      font-size: 15px;
      color: #363636;
    }

    & img {
      margin: 0 auto;
      max-width: 90%;
    }

    & .iframeWrapper {
      display: block;
      text-align: center;

      & iframe {
        border: none;
      }
    }
  }

  a {
    color: #0d69da;

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    font-size: 40px;
    line-height: 2;
  }
  h2 {
    font-size: 30px;
    line-height: 2;
  }
  h3 {
    font-size: 25px;
    line-height: 2;
  }

  li {
    & p {
      margin-bottom: 0;
    }
  }

  pre {
    padding: 20px;
    font-size: 15px;
    border-radius: 5px;
  }

  blockquote {
    padding-left: 30px;
    & p {
      color: #565656;
    }
  }

  hr {
    width: 50%;
    margin: 0 auto 30px;
  }
`;
