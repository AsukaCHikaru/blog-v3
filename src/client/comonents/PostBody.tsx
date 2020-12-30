import * as React from "react";
import styled from "styled-components";
import * as marked from "marked";

import { ContentfulRichTextContent } from "../hooks/api/types";
import { Image } from "./Image";

type OwnProps = {
  postBody: string | ContentfulRichTextContent["content"];
};

const postBodyParser = (
  content: ContentfulRichTextContent,
  index: number | string
) => {
  if (!content.content) {
    if (content.value) {
      if (content.marks.length === 0) {
        return content.value;
      }
      if (content.marks[0].type === "code") {
        return <code>{content.value}</code>;
      }
    }
    return null;
  }
  const body = content.content.map((item, indexLv2) =>
    postBodyParser(item, `${index}-${indexLv2}`)
  );
  switch (content.nodeType) {
    case "paragraph":
      return <p key={`content-${index}`}>{body}</p>;
    case "heading-1":
      return <h1 key={`content-${index}`}>{body}</h1>;
    case "heading-2":
      return <h2 key={`content-${index}`}>{body}</h2>;
    case "heading-3":
      return <h3 key={`content-${index}`}>{body}</h3>;
    case "unordered-list":
      return <ul key={`content-${index}`}>{body}</ul>;
    case "ordered-list":
      return <ol key={`content-${index}`}>{body}</ol>;
    case "list-item":
      return <li key={`content-${index}`}>{body}</li>;
    case "hyperlink":
      if (content.data.uri && /www\.youtube\.com/.test(content.data.uri)) {
        const youtubeUri = content.data.uri.replace(/watch\?v=/, "embed/");
        return (
          <span className="iframeWrapper" key={`content-${index}`}>
            <iframe id="ytplayer" width="640" height="360" src={youtubeUri} />
          </span>
        );
      }
      return (
        <a href={content.data.uri} key={`content-${index}`}>
          {body}
        </a>
      );
    case "blockquote":
      return <blockquote key={`content-${index}`}>{body}</blockquote>;
    case "embedded-asset-block":
      return <Image assetId={content.data.target?.sys.id || ""} />;
    default:
      return null;
  }
};

export const PostBody: React.FC<OwnProps> = ({ postBody }) => {
  if (!postBody) return null;
  if (typeof postBody === "string") {
    const parsedPostBody = React.useMemo(() => {
      return marked(postBody);
    }, [postBody]);
    return (
      <StyledWrapper>
        <StyledBody dangerouslySetInnerHTML={{ __html: parsedPostBody }} />
      </StyledWrapper>
    );
  }

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
