import { RouteProps } from "react-router-dom";
import { PostListPage } from "./pages/PostListPage";
import { PostPage } from "./pages/PostPage";

export const routes: RouteProps[] = [
  {
    path: ["/", "/catgory/:category", "/tag/:tag"],
    exact: true,
    component: PostListPage,
  },
  {
    path: "/post/:postPath",
    component: PostPage,
  },
];
