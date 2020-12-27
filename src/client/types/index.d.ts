export type PostList = {
  author: string;
  title: string;
  body: string;
  publishDate: string;
  category: PostCategory;
  tags: string[];
  path: string;
  id: string;
};

export type PostDetail = {
  author: string;
  title: string;
  body: string;
  publishDate: string;
  category: PostCategory;
  tags: string[];
  path: string;
  id: string;
};

export type PostCategory = "gaming" | "programming" | "others";
