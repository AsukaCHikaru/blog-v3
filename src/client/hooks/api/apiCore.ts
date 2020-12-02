import axios, { AxiosRequestConfig } from "axios";

import { POSTS_API_ENDPOINT, GITHUB_TOKEN } from "./env";
import { normalizePostDetailData, normalizePostSummariesData } from "./utils";

const axiosAuthHeader: AxiosRequestConfig = {
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
};

export const getPostList = async (tag?: string, category?: string) => {
  const posts = await axios.get(POSTS_API_ENDPOINT, axiosAuthHeader);
  const postSummaries = normalizePostSummariesData(posts.data);
  return postSummaries;
};

export const getPost = async (id: string) => {
  const post = await axios.get(`${POSTS_API_ENDPOINT}/${id}`, axiosAuthHeader);
  const postDetail = normalizePostDetailData(post.data);

  const postBody: any = await axios.get(
    `${POSTS_API_ENDPOINT}/${id}/comments`,
    axiosAuthHeader
  );

  postDetail.body = postBody.data[0].body;
  return postDetail;
};
