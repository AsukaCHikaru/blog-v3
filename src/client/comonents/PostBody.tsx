import * as React from "react";
import styled from "styled-components";
import * as marked from "marked";
import { ContentfulRichTextContent } from "../hooks/api/types";

type OwnProps = {
  postBody: string | ContentfulRichTextContent["content"];
};

const postBodyParser = (content: ContentfulRichTextContent) => {
  if (!content.content) {
    if (content.value) {
      return content.value;
    }
    return null;
  }
  const body = content.content.map((item) => postBodyParser(item));
  switch (content.nodeType) {
    case "paragraph":
      return <p>{body}</p>;
    case "heading-2":
      return <h2>{body}</h2>;
    case "heading-3":
      return <h3>{body}</h3>;
    case "unordered-list":
      return <ul>{body}</ul>;
    case "list-item":
      return <li>{body}</li>;
    case "hyperlink":
      return <a href={content.data.uri}>{body}</a>;
    case "blockquote":
      return <blockquote>{body}</blockquote>;
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
  console.log(postBody);

  return (
    <StyledWrapper>
      <StyledBody>
        {postBody.map((content) => postBodyParser(content))}
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
