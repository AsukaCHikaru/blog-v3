import { RouteProps } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

import { PostListPageContainer } from "./pages/PostListPage/PostListPageContainer";
import { PostPageContainer } from "./pages/PostPage/PostPageContainer";

export const routes: RouteProps[] = [
  {
    path: ["/", "/category/:category", "/tag/:tag"],
    exact: true,
    component: PostListPageContainer,
  },
  {
    path: "/post/:postPath",
    component: PostPageContainer,
  },
  {
    component: ErrorPage,
  },
];
