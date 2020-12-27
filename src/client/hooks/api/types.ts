interface PostCommonContentType {
  author: string[];
  category: PostCategory;
  language: PostLanguage;
  path: string;
  publishDate: string;
  tags?: string[];
  title: string;
}

export interface PostListContentType extends PostCommonContentType {
  preview: string;
  post: {
    sys: ContntfulLinkSys;
  };
}

export interface PostContentType extends PostCommonContentType {
  body?: ContentfulRichTextContent;
}

export interface Post extends PostCommonContentType, PostContentType {
  preview: string;
  id: string;
}

export type PostList = Post[];

export type PostLanguage = "zhTW" | "jaJP" | "enUS";

export type PostCategory = "gaming" | "programming" | "others";

export type GitHubIssueResponse = {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: GitHubUser;
  labels: GitHubLabel[];
  state: string;
  locked: boolean;
  assignee: GitHubUser | null;
  assignees: GitHubUser[];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string | null;
  closed_at: string | null;
  author_association: string;
  active_lock_reason: null;
  body: string;
  performed_via_github_app: null;
}[];

export type GithubIssue = GitHubIssueResponse[number];

type GitHubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: string;
};

type GitHubLabel = {
  id: string;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
};

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
  sys: ContentfulSys;
};

type ContentfulRichTextData = {
  uri?: string;
  target?: ContentfulRichTextDataTarget;
};

type ContentfulRichTextNodeType =
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
  | "embedded-entry-inline";

type ContentfulRichTextContent = {
  data: ContentfulRichTextData;
  content?: ContentfulRichTextContent[];
  marks: { type: "bold" | "underline" | "code" | "italic" }[];
  value?: string;
  nodeType: ContentfulRichTextNodeType;
};
