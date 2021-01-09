import { ContentfulRichTextContent, ContntfulLinkSys } from "./contentful";

export interface PostCommonContentType {
  author: string[];
  category: PostCategory;
  language: PostLanguage;
  path: string;
  publishDate: string;
  tags?: string[];
  title: string;
  no: number;
}

export interface PostListContentType extends PostCommonContentType {
  preview: ContentfulRichTextContent;
  description: string;
  post: {
    sys: ContntfulLinkSys;
  };
}

export interface PostContentType extends PostCommonContentType {
  body: ContentfulRichTextContent;
}

export interface PostSummary extends PostCommonContentType {
  preview: ContentfulRichTextContent;
  description: string;
  id: string;
}

export type PostList = PostSummary[];

export type PostLanguage = "zhTW" | "jaJP" | "enUS";

export type PostCategory = "gaming" | "programming" | "others";

export interface Asset {
  uri: string;
  description?: string;
}
