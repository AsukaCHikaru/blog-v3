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

  console.log(postList.data);

  const post = await axios.get(
    `${CONETNTFUL_API_ENDPOINT}/3jxSdYa9bcTQLvjsiSKukm`,
    axiosAuthHeader
  );
  console.log(post.data);

  return postList.data;
};

export const getPost = async (id: string) => {
  const post = await axios.get(
    `${CONETNTFUL_API_ENDPOINT}/${id}`,
    axiosAuthHeader
  );
  console.log(post.data);
  return post.data;
};
