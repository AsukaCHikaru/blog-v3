import axios from "axios";

const API_BASE_URL = "http://api-blog-server.asukachikaru.com:9000";

export const getPostList = async (tag?: string, category?: string) => {
  let fetchPostListApiEndpoint = API_BASE_URL + "/api/v1/posts";
  if (tag) fetchPostListApiEndpoint += `/tag/${tag}`;
  if (category) fetchPostListApiEndpoint += `/category/${category}`;

  const response = await axios.get(fetchPostListApiEndpoint);
  return response.data;
};

export const getPost = async (id: string) => {
  const response = await axios.get(API_BASE_URL + `/api/v1/posts/id/${id}`);
  return response.data;
};
