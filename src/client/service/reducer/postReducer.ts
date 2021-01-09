import { STORE_STATUS, BaseState } from ".";
import { PostAction, PostActionTypes } from "../action/postActions";
import { ContentfulRichTextContent } from "../../types/contentful";

export interface PostState extends BaseState {
  data: Record<string, ContentfulRichTextContent["content"]>;
}

const initialState: PostState = {
  status: 1,
  data: {},
};

export const postReducer = (
  state: PostState = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCHING_POST:
      return { ...state, status: STORE_STATUS.PENDING };
    case PostActionTypes.FETCHED_POST:
      const postId = action.payload.data.sys.id;

      return {
        ...state,
        status: STORE_STATUS.SUCCEED,
        data: {
          ...state.data,
          [postId]: action.payload.data.fields.body.content,
        },
      };
    default:
      return state;
  }
};
