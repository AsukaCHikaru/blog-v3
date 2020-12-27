import axios, { AxiosRequestConfig } from "axios";

import { CONETNTFUL_API_ENDPOINT, CONTENTFUL_TOKEN } from "./env";

const axiosAuthHeader: AxiosRequestConfig = {
  headers: {
    Authorization: `Bearer ${CONTENTFUL_TOKEN}`,
  },
};

export const getPostList = async (tag?: string, category?: string) => {
  const postList = await axios.get(
    `${CONETNTFUL_API_ENDPOINT}?content_type=postList`,
    axiosAuthHeader
  );
  return postList.data;
};

export const getPost = async (id: string) => {
  const post = await axios.get(
    `${CONETNTFUL_API_ENDPOINT}/${id}`,
    axiosAuthHeader
  );
  return post.data;
};
