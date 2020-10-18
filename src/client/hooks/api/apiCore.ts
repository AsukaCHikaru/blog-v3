import axios from "axios";

export const fetchPostList = async (tag?: string, category?: string) => {
  let fetchPostListApiEndpoint = "http://localhost:9000/api/v1/posts";
  if (tag) fetchPostListApiEndpoint += `/tag/${tag}`;
  if (category) fetchPostListApiEndpoint += `/category/${category}`;

  const response = await axios.get(fetchPostListApiEndpoint);
  return response.data;
};

export const fetchPost = async (id: string) => {
  const response = await axios.get(
    `http://localhost:9000/api/v1/posts/id/${id}`
  );
  return response.data;
};
