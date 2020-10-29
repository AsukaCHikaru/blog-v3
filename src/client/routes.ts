import { RouteProps } from "react-router-dom";

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
];
