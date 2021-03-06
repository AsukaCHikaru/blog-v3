import * as React from "react";
import styled from "styled-components";

import { Code } from "../components/Code";
import { Image } from "../components/Image";
import { ContentfulRichTextContent } from "../types/contentful";

type OwnProps = {
  children: (string | JSX.Element | null)[];
};

export const postBodyParser = (
  content: ContentfulRichTextContent,
  index: number | string
) => {
  if (!content.content) {
    if (content.value) {
      if (content.marks.length === 0) {
        return content.value;
      }
      if (content.marks[0].type === "code") {
        if (/\r?\n|\r/.test(content.value)) {
          return <Code>{content.value}</Code>
        }
        return <StyledCode>{content.value}</StyledCode>;
      }
    }
    return null;
  }
  const body = content.content.map((item, indexLv2) =>
    postBodyParser(item, `${index}-${indexLv2}`)
  );
  switch (content.nodeType) {
    case "paragraph":
      return <StyledP key={`content-${index}`}>{body}</StyledP>;
    case "heading-1":
      return <h1 key={`content-${index}`}>{body}</h1>;
    case "heading-2":
      return <StyledH2 key={`content-${index}`}>{body}</StyledH2>;
    case "heading-3":
      return <StyledH3 key={`content-${index}`}>{body}</StyledH3>;
    case "unordered-list":
      return <ul key={`content-${index}`}>{body}</ul>;
    case "ordered-list":
      return <ol key={`content-${index}`}>{body}</ol>;
    case "list-item":
      return <StyledLi key={`content-${index}`}>{body}</StyledLi>;
    case "hyperlink":
      if (
        content.data.uri &&
        /www\.youtube\.com\/watch/.test(content.data.uri)
      ) {
        const youtubeUri = content.data.uri.replace(/watch\?v=/, "embed/");
        return (
          <StyledIFrameWrapper
            className="iframeWrapper"
            key={`content-${index}`}
          >
            <StyledIFrame id="ytplayer" src={youtubeUri} />
          </StyledIFrameWrapper>
        );
      }
      return (
        <StyledA
          href={content.data.uri}
          key={`content-${index}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {body}
        </StyledA>
      );
    case "blockquote":
      return <blockquote key={`content-${index}`}>{body}</blockquote>;
    case "embedded-asset-block":
      return <Image assetId={content.data.target?.sys.id || ""} />;
    default:
      return null;
  }
};

const StyledP = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 32px;
  white-space: pre-wrap;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
  line-height: 2;
  font-weight: 700;

  @media (max-width: 400px) {
    font-size: 25px;
  }
`;

const StyledH3 = styled.h3`
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;

  @media (max-width: 400px) {
    font-size: 21px;
    line-height: 30px;
  }
`;

const StyledLi = styled.li`
  & p {
    margin-bottom: 0;
  }
`;

const StyledA = styled.a`
  color: #0d69da;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledCode = styled.code`
  padding: 0 5px;
  display: inline-block;
  font-size: 15px;
  color: #131313;
  border-radius: 5px;
`;

const StyledIFrameWrapper = styled.span``;

const StyledIFrame = styled.iframe`
  width: 656px;
  height: 369px;
  margin: 0 auto;

  @media (max-width: 400px) {
    width: 320px;
    height: 180px;
  }
`;
