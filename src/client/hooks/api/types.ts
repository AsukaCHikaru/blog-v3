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

export type ContentfulEntries<T> = {
  sys: {
    type: ContentfulSysType;
  };
  total: number;
  limit: number;
  skip: number;
  items: ContentfulEntry<T>[];
  includes: {
    Asset: ContentfulAsset[];
  };
};

export type ContentfulEntry<T> = {
  sys: ContentfulEntrySys;
  fields: T;
};

export type ContentfulAsset = {
  fields: {
    description?: string;
    file: ContentfulAssetFile;
    title: string;
  };
  sys: ContentfulSys;
};

type ContentfulAssetFile = {
  contentType: string;
  details: ContentfulAssetFileDetail;
  fileName: string;
  url: string;
};

type ContentfulAssetFileDetail = {
  image: {
    width: number;
    height: number;
  };
  size: number;
};

type ContentfulSysType = "Asset" | "Array" | "Link";

type ContentfulLinkType = "Environment" | "Entry" | "ContentType";

type ContentfulSys = {
  contentType: ContntfulLinkSys;
  createdAt?: string;
  environments?: ContentfulEnvironment;
  id?: string;
  linkType?: ContentfulLinkType;
  locale?: string;
  revision?: number;
  space?: ContentfulSpace;
  type: ContentfulSysType;
  updatedAt?: string;
};

type ContentfulEntrySys = {
  contentType: ContntfulLinkSys;
  createdAt: string;
  environments: ContentfulEnvironment;
  id: string;
  locale: string;
  revision: number;
  space: ContentfulSpace;
  type: ContentfulSysType;
  updatedAt: string;
};

export interface ContntfulLinkSys {
  type: "Link";
  linkType: ContentfulLinkType;
  id: string;
}

type ContentfulEnvironment = {
  sys: ContntfulLinkSys;
};

type ContentfulSpace = {
  sys: ContntfulLinkSys;
};

type ContentfulRichTextDataTarget = {
  sys: ContntfulLinkSys;
};

type ContentfulRichTextData = {
  uri?: string;
  target?: ContentfulRichTextDataTarget;
};

export type ContentfulRichTextNodeType =
  | "text"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "heading-5"
  | "heading-6"
  | "paragraph"
  | "hyperlink"
  | "entry-hyperlink"
  | "asset-hyperlink"
  | "unordered-list"
  | "ordered-list"
  | "list-item"
  | "blockquote"
  | "hr"
  | "embedded-entry-block"
  | "embedded-entry-inline"
  | "embedded-asset-block";

export type ContentfulRichTextContent = {
  data: ContentfulRichTextData;
  content?: ContentfulRichTextContent[];
  marks: { type: "bold" | "underline" | "code" | "italic" }[];
  value?: string;
  nodeType: ContentfulRichTextNodeType;
};
