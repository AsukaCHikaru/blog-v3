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
