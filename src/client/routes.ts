import { RouteProps } from "react-router-dom";

import { PostListPageContainer } from "./pages/PostListPageContainer";
import { PostPage } from "./pages/PostPage";

export const routes: RouteProps[] = [
  {
    path: ["/", "/catgory/:category", "/tag/:tag"],
    exact: true,
    component: PostListPageContainer,
  },
  {
    path: "/post/:postPath",
    component: PostPage,
  },
];
