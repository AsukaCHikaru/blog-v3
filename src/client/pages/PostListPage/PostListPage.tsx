import * as React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import { PostLink } from "../../components/PostLink";
import { RootState, STORE_STATUS } from "../../service/reducer";
import { PostListPageHeader } from "../../components/PostListPageHeader";
import { Footer } from "../../components/Footer";
import {
  PostListPageLayout,
  StyledContents,
  StyledBottomContents,
} from "../../components/Layout";
import { Helmet } from "../../components/Helmet";
import { useScrollTop } from "../../hooks/useScrollTop";

interface OwnProps {}
interface ConnectedDispatchProps {
  fetchPostList: () => void;
}
interface PostListPageProps extends OwnProps, ConnectedDispatchProps {}

interface Params {
  tag?: string;
  category?: string;
}

export const PostListPage: React.FC<PostListPageProps> = ({
  fetchPostList,
}) => {
  const { tag, category } = useParams<Params>();
  const postList = useSelector((state: RootState) => state.postList);

  useScrollTop();

  React.useEffect(() => {
    if (postList.status === STORE_STATUS.IDLE) fetchPostList();
  }, []);

  const filteredPostList = React.useMemo(() => {
    if (!tag && !category) {
      return postList;
    }
    if (tag) {
      return {
        ...postList,
        list: postList.list.filter(
          (post) => post.tags && post.tags.includes(tag)
        ),
      };
    }
    if (category) {
      return {
        ...postList,
        list: postList.list.filter((post) => post.category === category),
      };
    }
  }, [tag, category, postList]);

  return (
    <PostListPageLayout>
      <Helmet />
      <StyledContainer>
        <PostListPageHeader selectedCategory={category} />
        <StyledContents>
          {filteredPostList &&
            filteredPostList.list &&
            filteredPostList.list.length > 0 &&
            filteredPostList.list.map((post) => (
              <PostLink postSummary={post} key={post.path} />
            ))}
        </StyledContents>
        <StyledBottomContents>
          <Footer />
        </StyledBottomContents>
      </StyledContainer>
    </PostListPageLayout>
  );
};

const StyledContainer = styled.div``;
