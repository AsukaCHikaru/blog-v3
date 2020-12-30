import * as React from "react";
import { Image } from "../comonents/Image";
import { ContentfulRichTextContent } from "../hooks/api/types";

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
