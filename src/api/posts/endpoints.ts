//import { AxiosResponse } from 'axios';
import Axios, { AxiosResponse } from 'axios';
import { Post, PostResponse } from './types';
//import { GetHotelsResponse, Hotel, HotelResponse } from './types';

const instance = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const getPosts = (): Promise<AxiosResponse> => {
  return instance.get('/posts');
};

export const postPost = (post: Post): Promise<PostResponse> => {
  return instance.post('/posts', post);
};

export const deletePost = (id: number) => {
  return instance.delete(`/posts/${id}`);
};
export const editPost = (id: number, info: Partial<Post>) => {
  return instance.patch(`/posts/${id}`, info);
};

export const paginatePost = (limit: number, page: number) => {
  return instance.get(`/posts?_limit=${limit}&_page=${page}`);
};
