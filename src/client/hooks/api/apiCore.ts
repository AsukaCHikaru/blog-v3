import axios, { AxiosRequestConfig } from "axios";

import { CONTENTFUL_API_ENDPOINT, CONTENTFUL_TOKEN } from "./env";

const axiosAuthHeader: AxiosRequestConfig = {
  headers: {
    Authorization: `Bearer ${CONTENTFUL_TOKEN}`,
  },
};

export const getPostList = async (tag?: string, category?: string) => {
  const response = await axios.get(
    `${CONTENTFUL_API_ENDPOINT}/entries?content_type=postList`,
    axiosAuthHeader
  );
  return response.data;
};

export const getPost = async (id: string) => {
  const response = await axios.get(
    `${CONTENTFUL_API_ENDPOINT}/entries/${id}`,
    axiosAuthHeader
  );
  return response.data;
};

export const getAsset = async (id: string) => {
  const response = await axios.get(
    `${CONTENTFUL_API_ENDPOINT}/assets/${id}`,
    axiosAuthHeader
  );
  return response.data;
};
