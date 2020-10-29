import * as React from "react";
import styled from "styled-components";
import * as marked from "marked";

type OwnProps = {
  postBody: string;
};

export const PostBody: React.FC<OwnProps> = ({ postBody }) => {
  const parsedPostBody = React.useMemo(() => {
    return marked(postBody);
  }, [postBody]);
  return (
    <StyledWrapper>
      <StyledBody dangerouslySetInnerHTML={{ __html: parsedPostBody }} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledBody = styled.div``;
